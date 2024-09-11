from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)

    # Related Data
    tweets = db.relationship("Tweet", back_populates="author", cascade="all, delete")

    def __repr__(self):
        return f"<User: id = {self.id} | username = {self.username}>"


class Tweet(db.Model):
    __tablename__ = "tweets"

    id = db.Column(db.Integer, primary_key=True)
    tweet = db.Column(db.String(280), nullable=False)
    likes = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    # Related Data
    author = db.relationship("User", back_populates="tweets")
