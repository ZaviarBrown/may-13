from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

likes = db.Table(
    "likes",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("tweet_id", db.Integer, db.ForeignKey("tweets.id")),
)


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)

    # Related Data
    tweets = db.relationship("Tweet", back_populates="author", cascade="all, delete")
    liked_tweets = db.relationship("Tweet", back_populates="liked_by", secondary=likes)

    def __repr__(self):
        return f"<User: id = {self.id} | username = {self.username}>"

    def js_basic(self):
        return {
            "id": self.id,
            "username": self.username,
        }

    def js(self):
        return {
            **self.js_basic(),
            "Tweets": [tweet.js_basic() for tweet in self.tweets],
            "LikedTweets": [tweet.js_basic() for tweet in self.liked_tweets],
        }


class Tweet(db.Model):
    __tablename__ = "tweets"

    id = db.Column(db.Integer, primary_key=True)
    tweet = db.Column(db.String(280), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    # Related Data
    author = db.relationship("User", back_populates="tweets")
    liked_by = db.relationship("User", back_populates="liked_tweets", secondary=likes)

    def js_basic(self):
        return {
            "id": self.id,
            "tweet": self.tweet,
            "num_likes": len(self.liked_by),
            "user_id": self.user_id,
        }

    # could be named to_dict()
    def js(self):
        return {
            **self.js_basic(),
            "OriginalPoster": self.author.js_basic(),
            "LikedByTheseUsers": [user.js_basic() for user in self.liked_by],
        }

    # def js_less_dry_version(self):
    #     return {
    #         "id": self.id,
    #         "tweet": self.tweet,
    #         "num_likes": len(self.liked_by),
    #         "user_id": self.user_id,
    #         "User": self.author.js_basic(),
    #     }
