from flask_wtf import FlaskForm
from flask_wtf.file import FileAllowed, FileField, FileRequired
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired, ValidationError

from app.api.aws import ALLOWED_EXTENSIONS


def must_be_hyped(form, field):
    tweet = field.data

    if "!" not in tweet:
        raise ValidationError("I CAN'T HEEAAARRRR YOOOUUUUUU")


class TweetForm(FlaskForm):
    tweet = StringField("tweet", validators=[DataRequired(), must_be_hyped])
    user_id = IntegerField("userId", validators=[DataRequired()])
    image = FileField(
        "Image File", validators=[FileRequired(), FileAllowed(ALLOWED_EXTENSIONS)]
    )
