from .db import add_prefix_for_prod, db

likes = db.Table(
    "likes",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"))),
    db.Column("tweet_id", db.Integer, db.ForeignKey(add_prefix_for_prod("tweets.id"))),
)
