from sqlalchemy.sql import text

from app.models import SCHEMA, Tweet, db, environment
from app.seeds.users import bobbie, demo, marnie


# Adds demo tweets
def seed_tweets():
    tweet1 = Tweet(tweet="This is my first tweet!", author=demo, liked_by=[marnie])
    tweet2 = Tweet(
        tweet="Sql tweets are usually worse than the original :/", author=demo
    )
    tweet3 = Tweet(
        tweet="You know what they say, third tweet's the charm!!!",
        author=marnie,
        liked_by=[bobbie, demo, marnie],
    )

    db.session.add(tweet1)
    db.session.add(tweet2)
    db.session.add(tweet3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the tweets table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_tweets():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.tweets RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM tweets"))

    db.session.commit()
