from random import choice

from flask import Flask, redirect, render_template

from .config import Config
from .forms import NewTweetForm
from .models import Tweet, User, db

# from .tweets import tweets #! Not using this anymore!

app = Flask(__name__)

app.config.from_object(Config)
db.init_app(app)


@app.route("/")
def index():
    tweets = Tweet.query.all()
    random_tweet = choice(tweets)
    return render_template("index.html", tweet=random_tweet)


@app.route("/feed")
def feed():
    tweets = Tweet.query.all()
    # print(tweets)
    # print(dir(tweets[0]))
    print(tweets[0].author)
    return render_template("feed.html", tweets=tweets)


@app.route("/new", methods=["GET", "POST"])
def post_a_tweet():
    tweet_form = NewTweetForm()
    our_only_user = User.query.get(1)

    if tweet_form.validate_on_submit():
        new_tweet = Tweet(
            author=our_only_user,
            tweet=tweet_form.data["tweet"],
            likes=tweet_form.data["likes"],
        )

        print(dir(new_tweet))
        print("\n", new_tweet.user_id, "\n")
        db.session.add(new_tweet)
        db.session.commit()
        return redirect("/feed")

    if tweet_form.errors:
        return render_template("new_tweet.html", form=tweet_form, **tweet_form.errors)

    return render_template("new_tweet.html", form=tweet_form)
