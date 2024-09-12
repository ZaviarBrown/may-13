from flask import Flask
from flask_migrate import Migrate

from .config import Config
from .models import Owner, db

app = Flask(__name__)

app.config.from_object(Config)
db.init_app(app)
Migrate(app, db)
