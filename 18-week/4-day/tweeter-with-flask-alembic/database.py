from dotenv import load_dotenv

load_dotenv()

# Regardless of the lint error you receive,
# load_dotenv must run before running this
# so that the environment variables are
# properly loaded.
from app import app
from app.models import Tweet, User, db

with app.app_context():
    elon = User(username="Elon Musk")
    belon = User(username="Belon Musk")
    felon = User(username="Felon Musk")
    tweet1 = Tweet(
        tweet="Anything anyone says will be used against me in a court of law",
        author=elon,
        num_likes=504_000,
        liked_by=[elon, belon, felon],
    )
    tweet2 = Tweet(
        liked_by=[elon, belon],
        tweet="Twitter servers are running at Warp 9!!",
        author=elon,
        num_likes=527_000,
    )
    tweet3 = Tweet(
        tweet="I was always crazy on Twitter fyi",
        author=elon,
        num_likes=76_600,
        liked_by=[belon],
    )
    db.session.add(elon)
    # db.session.add(belon)
    # db.session.add(felon)
    db.session.commit()
