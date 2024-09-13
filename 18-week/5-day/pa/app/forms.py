from flask_wtf import FlaskForm
from wtforms import (
    DateField,
    IntegerField,
    SelectField,
    StringField,
    SubmitField,
    TextAreaField,
)
from wtforms.validators import DataRequired


class SimpleForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    age = IntegerField("Age")
    bio = TextAreaField("Biography")
    submit = SubmitField("Submit")
    birth_date = DateField("Birthday")
    fav_lang = SelectField("Favorite Language", choices=["JS", "TS", "PY", "HTML/CSS"])
