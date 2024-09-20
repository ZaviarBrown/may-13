from flask import Blueprint, request
from flask_login import login_required

from app.api.aws import get_unique_filename, upload_file_to_s3
from app.forms import TweetForm
from app.models import Tweet, db

tweet_routes = Blueprint("tweets", __name__)


def format_errors(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = dict()

    for field in validation_errors:
        errorMessages[field] = [error for error in validation_errors[field]]

    return errorMessages


@tweet_routes.route("")
def tweets():
    """
    Query for all tweets and returns them in a list of tweet dictionaries
    """
    tweets = Tweet.query.all()
    return {"tweets": [tweet.to_dict() for tweet in tweets]}


@tweet_routes.route("", methods=["POST"])
def post_a_tweet():
    """
    Query for all tweets and returns them in a list of tweet dictionaries
    """

    form = TweetForm()

    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        tweet = form.data["tweet"]
        user_id = form.data["user_id"]
        image = form.data["image"]

        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        print(upload)

        if "url" not in upload:
            # if the dictionary doesn't have a url key
            # it means that there was an error when you tried to upload
            # so you send back that error message (and you printed it above)
            return {"errors": [upload]}, 400

        url = upload["url"]
        new_tweet = Tweet(tweet=tweet, user_id=user_id, image=url)

        db.session.add(new_tweet)

        db.session.commit()

        return new_tweet.to_dict()

    if form.errors:
        return {"errors": format_errors(form.errors)}, 400
