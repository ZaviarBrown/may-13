from flask import Blueprint, request
from flask_login import login_required

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
    print("\n\n\n HEEEEYYOOOOOOO \n\n\n")

    form = TweetForm()

    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        new_tweet = Tweet()

        form.populate_obj(new_tweet)

        db.session.add(new_tweet)

        db.session.commit()

        return new_tweet.to_dict()

    if form.errors:
        return {"errors": format_errors(form.errors)}, 400

    return
