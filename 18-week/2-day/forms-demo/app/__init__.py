import os

from flask import Flask, render_template

from app import routes

app = Flask(__name__)

app.config.update({"SECRET_KEY": os.environ.get("SECRET_KEY")})

app.register_blueprint(routes.bp)


@app.route("/")
def main():
    info = {"title": "This a title", "heading": "this is a heading"}
    return render_template("page.html", info=info)
