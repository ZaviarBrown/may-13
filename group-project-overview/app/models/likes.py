from .db import SCHEMA, add_prefix_for_prod, db, environment

likes = db.Table(
    "likes",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"))),
    db.Column("tweet_id", db.Integer, db.ForeignKey(add_prefix_for_prod("tweets.id"))),
)

if environment == "production":
    likes.schema = SCHEMA
