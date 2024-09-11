from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SubmitField
from wtforms.validators import DataRequired


class NewTweetForm(FlaskForm):
    tweet = StringField("Tweet", validators=[DataRequired()])
    likes = IntegerField("Number of likes", validators=[DataRequired()])
    submit = SubmitField("Create Tweet")
