from flask.cli import AppGroup

from app.models.db import SCHEMA, db, environment

from .tweets import seed_tweets, undo_tweets
from .users import seed_users, undo_users

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup("seed")


# Creates the `flask seed all` command
@seed_commands.command("all")
def seed():
    # ! Undo all seeds
    undo_tweets()
    undo_users()

    # ? Apply all seeds
    seed_users()
    seed_tweets()
    # if environment == "production":
    #     # Before seeding in production, you want to run the seed undo
    #     # command, which will  truncate all tables prefixed with
    #     # the schema name (see comment in users.py undo_users function).
    #     # Make sure to add all your other model's undo functions below
    #     undo_tweets()
    #     undo_users()
    # seed_users()
    # seed_tweets()


# Creates the `flask seed undo` command
@seed_commands.command("undo")
def undo():
    undo_tweets()
    undo_users()
