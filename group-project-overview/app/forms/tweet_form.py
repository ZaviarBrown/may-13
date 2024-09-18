from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired, ValidationError


def must_be_hyped(form, field):
    tweet = field.data

    if "!" not in tweet:
        raise ValidationError("I CAN'T HEEAAARRRR YOOOUUUUUU")


class TweetForm(FlaskForm):
    tweet = StringField("tweet", validators=[DataRequired(), must_be_hyped])
    user_id = IntegerField("userId", validators=[DataRequired()])
