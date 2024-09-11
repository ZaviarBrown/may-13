from dotenv import load_dotenv

load_dotenv()

# Regardless of the lint error you receive,
# load_dotenv must run before running this
# so that the environment variables are
# properly loaded.
from app import app
from app.models import Tweet, User, db

with app.app_context():
    db.drop_all()
    db.create_all()

    elon = User(username="Elon Musk")
    tweet1 = Tweet(
        tweet="Anything anyone says will be used against me in a court of law",
        author=elon,
        likes=504_000,
    )
    tweet2 = Tweet(
        tweet="Twitter servers are running at Warp 9!!", author=elon, likes=527_000
    )
    tweet3 = Tweet(tweet="I was always crazy on Twitter fyi", author=elon, likes=76_600)
    db.session.add(elon)
    db.session.commit()
