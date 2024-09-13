from flask import Flask, redirect, render_template
from flask_migrate import Migrate

from .config import Configuration
from .forms import SimpleForm
from .models import SimplePerson, db

app = Flask(__name__)
app.config.from_object(Configuration)
db.init_app(app)
Migrate(app, db)


@app.route("/")
def index():
    return render_template("main_page.html")


@app.route("/simple-form")
def simple_form():
    form = SimpleForm()

    return render_template("simple_form.html", form=form)


@app.route("/simple-form", methods=["POST"])
def simple_form_post():
    form = SimpleForm()

    if form.validate_on_submit():
        new_simpleton = SimplePerson()
        form.populate_obj(new_simpleton)

        db.session.add(new_simpleton)
        db.session.commit()

        return redirect("/")

    print(form.errors)

    # if form.errors:
    #     pass

    return "Bad Data"


@app.route("/simple-form-data")
def simple_form_data():
    m_simpletons = SimplePerson.query.filter(SimplePerson.name.like("M%")).all()
    return render_template("simple_form_data.html", people=m_simpletons)
