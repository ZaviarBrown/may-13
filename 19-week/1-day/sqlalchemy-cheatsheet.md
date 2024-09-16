# Flask / SQLAlchemy / Alembic Cheatsheet

Here are some examples of useful patterns for models and queries with Flask-SQLAlchemy.

## Command Line

Like Sequelize, SQLAlchemy provides utilities for setting up your db and generating migrations.

### Init Project

```py
pipenv run flask db init
```

### Set up the correct revision file name in the alembic.ini

Optional, but recommended

```py
file_template = %%(year)d%%(month).2d%%(day).2d_%%(hour).2d%%(minute).2d%%(second).2d_%%(slug)s
```

### Create a migration file

```zsh
pipenv run flask db migrate -m "Message"
```

### Apply your migrations to your database

```zsh
pipenv run flask db upgrade
```

### Undo a single migration

```zsh
pipenv run flask db downgrade
```

## Model Associations

### One-to-One relationship between Student and Scholarship

`On the student model`

```py
class Student(db.Model):
  __tablename__ = "students"
  id = db.Column(db.Integer, primary_key=True)
  # other columns

  scholarship = db.relationship(
    "Scholarship", uselist=False,
    back_populates="student"
  )
```

`On the scholarship model`

```py
class Scholarship(db.Model):
  __tablename__ = "scholarships"
  id = db.Column(db.Integer, primary_key=True)
  student_id = db.Column(db.Integer, db.ForeignKey("students.id"))

  # other columns
  student = db.relationship("Student", back_populates="scholarship")
```

### One-to-Many relationship between Student and Class

`On the student model`

```py
class Student(db.Model):
  __tablename__ = "students"
  id = db.Column(db.Integer, primary_key=True)

  # other columns

  classes = db.relationship("Class", back_populates="student")
```

`On the class model`

```py
class Class(db.Model):
  __tablename__ = "classes"
  id = db.Column(db.Integer, primary_key=True)
  student_id = db.Column(db.Integer, db.ForeignKey("students.id"))

  # other columns

  student = db.relationship("Student", back_populates="classes")
```

### Many to Many between Student and Lesson through student_lessons helper table

Helper table for joining

```py
student_lessons = db.Table(
  "student_lessons",
    db.Column(
    "student_id",
    db.Integer,
    db.ForeignKey("students.id"),
    primary_key=True
  ),
  db.Column(
    "lesson_id",
    db.Integer,
    db.ForeignKey("lessons.id"),
    primary_key=True
  )
)
```

`On the lesson model`

```py
class Lesson(db.Model):
  __tablename__ = "lessons"
  id = db.Column(db.Integer, primary_key=True)

  # other columns

  students = db.relationship(
    "Student",
    secondary=student_lessons,
    back_populates="lessons"
  )
```

`On the student model`

```py
class Student(db.Model):
  __tablename__ = "students"
  id = db.Column(db.Integer, primary_key=True) # other columns

  lessons = db.relationship(
    "Lesson",
    secondary=student_lessons,
    back_populates="students"
  )
```

### Many-to-Many relationship between Users and Users through follows helper table

`On helper table`

```py
follows = db.Table(
  "follows",
  db.Column("follower_id", db.Integer, db.ForeignKey("users.id")),
  db.Column("followed_id", db.Integer, db.ForeignKey("users.id"))
)
```

`On the User model`

```py
class User(db.Model):
  __tablename__ = "users"
  id = db.Column(db.Integer, primary_key=True) # columns
  followers = db.relationship(
    "User",
    secondary=follows,
    primaryjoin=(follows.c.follower_id == id),
    secondaryjoin=(follows.c.followed_id == id),
    backref=db.backref("following", lazy="dynamic"),
    lazy="dynamic"
  )
# this relationship allows you to access both the collection of users
# that follow a given user (with user.followers), and the collection
# of users that a user follows (with user.following)
```

## Query Format

### For a collection of entities

```py
# get all entities — this will return a list of Student objects
# the .all() method turns the result of the query from a generator
# into a list
students = Student.query.all()
```

### For one entity

`by ID`

```py
# get the student with the ID 2

student = Student.query.get(2)
```

### based on another value

```py
# using filter_by

jeff = Student.query.filter_by(name="Jeff").first()

# using filter (these two will yield the same result)

jeff = Student.query.filter(Student.name == "Jeff").first()

# note: using the method `first` will get the first

# entity that meets the query, or if there are none

# it will return `None`. if you replaced `first` with `one`

# it will raise an exception if there is more than

# one result (or if there are none at all)
```

### Simple query examples (with filter, order_by, limit)

get the students whose usernames contain "sh"

```py
Student.query.filter(Student.username.ilike("%sh%"))
```

get the three students whose names come last in the alphabet

```py
last_students = Student.query.order_by(
  Student.name.desc()
).limit(3)

# case insensitive version - include import statement at top of file

from sqlalchemy import func
last_students = Student.query.order_by(
  func.lower(Student.name).desc()
).limit(3)
```

get students whose enrollment status is True

```py
Student.query.filter(Student.enrolled.is_(True))
```

student whose enrollment status is True and whose usernames contain sh

```py
# by chaining filters

filtered*students = Student.query.filter(
  Student.username.ilike("%ju%")
).filter(
  Student.enrolled.is_(True)
).all()

Student.query.filter(
  Student.username.ilike("%ju%"),
  Student.enrolled.is_(True)
).all()
```

## Creating and updating data

### adding new data to database

```py
# create a new entry

august = Cohort(start_month="August")

# setting up one-to-many associations

#

# now lets create some students who belong to specific cohorts

# option 1: if you already have the id

student1 = Student(name="Laramie", cohort_id=3, enrolled=True)

# option 2: use the Cohort object to establish the relationship

student2 = Student(name="Marni", cohort=august, enrolled=True)

# setting up many-to-many relationships

#

# students can belong to many teams, teams can have many students

team1 = Team(color="blue", name="cool kids")

# you can add a student to a team by appending to the Student object

student1.teams.append(team1)

# or by appending to the Team object

team1.students.append(student2)

# finally, add all your new entries and commit

db.session.add(august)
db.session.add(student1)
db.session.add(student2)
db.session.add(team1)
db.session.commit()
```

### updating existing data

```py
# select your entry from the database - for example, by ID

score = Score.query.get(12)

# change the relevant information on that item

score.percent_correct = 75

#

# add and commit

db.session.add(score)
db.session.commit()
```
