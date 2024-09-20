from .db import SCHEMA, add_prefix_for_prod, db, environment
from .likes import likes


class Tweet(db.Model):
    __tablename__ = "tweets"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    tweet = db.Column(db.Text)
    user_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False
    )
    image = db.Column(db.String(1000), nullable=True)

    # Related data
    author = db.relationship("User", back_populates="tweets")
    liked_by = db.relationship("User", back_populates="liked_tweets", secondary=likes)

    def to_dict_basic(self):
        return {
            "id": self.id,
            "tweet": self.tweet,
            "numLikes": len(self.liked_by),
            "userId": self.user_id,
            "image": self.image,
        }

    # could be named to_dict()
    def to_dict(self):
        return {
            **self.to_dict_basic(),
            "User": self.author.to_dict_basic(),
            "LikedBy": [user.to_dict_basic() for user in self.liked_by],
        }
