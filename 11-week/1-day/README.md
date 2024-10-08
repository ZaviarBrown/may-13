# SQL Optimized With Sequelize!

## Sequelize has three major file types

### Models

- Blueprints for tables

### Migrations

- Changes to our db

### Seeders

- Data for our db

---

## Insta Model? 🤢 Database Model 😏

A 'model' for the data in our tables

JS Classes were the 'blueprints', and an instance was the 'building'

```js
class Dog {
  // this is the blueprint to make dogs
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.isGoodDog = true;
  }
}

const guardDog = new Dog("Cerberus", 1000); // an instance of the Dog class
```

Models are JS Classes as well! Every instance is a record in our table

```js
class Dog extends Model {
  static associate(models) {
    // how we create relationships between tables
  }
}

Dog.init(
  // this is basically the constructor
  {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    isGoodDog: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }
);
```

Later we'll learn to create records in our table using Sequelize syntax instead of saying `new Dog()`

---

## Migrations == Mutations 🦠

Any change to our database schema, including creating it!

Sequelize automatically generates migration files based on your models

- This makes migrations act as a version-control system
- Any change you make can be logged and reverted

---

## Plant Data With Seeds 🌱

Seeder files are filled with dummy data to populate your site

Run a seeder to add or remove data from your db

---

---

---

---

---

## Models | Migrations | Seeders

You will find these links very useful for completing practices

[Model Basics](https://sequelize.org/docs/v6/core-concepts/model-basics/)

[Data Types](https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)

[Validations & Constraints](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints)

[Migrations](https://sequelize.org/docs/v6/other-topics/migrations/)

[Query Interface](https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface)

## Generate a Model file

`npx sequelize model:generate --name Name_Of_Model --attributes name:string`

Attributes are comma separated with no spaces

`--attributes name:string,email:string,phone:integer,isAdmin:boolean`

What gets created when this command is run

`npx sequelize model:generate --name User --attributes name:string,email:string,phone:integer,isAdmin:boolean`

```js
"use strict";
const { Model } = require("sequelize");
//! we export this function to be used for creating Users
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    //! here the User class is created
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    //! here is our "constructor"
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      isAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User; //! here we return User from this function to be used
};
```

SQL Equivalent~ish - Table isn't being created in the database through this file

```sql
CREATE TABLE Users (
  name VARCHAR,
  email VARCHAR,
  phone INTEGER,
  isAdmin BOOLEAN
);
```

## Important Notes For Models

Model files DO NOT insert tables into our database.

Model files DO NOT make changes to our database/tables.

- Changing a model WILL NOT automatically change the table in the database

Models are simply the **_STRUCTURE_** for our tables.

- Any new data being created through the model will follow the model's structure

**_Special note_: We will use Models to create data later based on User Input. Right now we're referring to the _Model files_ themselves.**

---

## Generate a Migration file

`npx sequelize migration:generate --name name-of-migration`

```js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
```

Example code is auto-generated with every migration

Migration files are run to make changes to our database

- Up makes changes
- Down reverts changes

When we ran our `model:generate` command from before, this migration was created at the same time.

Notice how id was automatically created for us with the classic constraints, as well as createdAt & updatedAt

```js
"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.INTEGER,
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"), // I added this line
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"), // I added this line
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
```

SQL Equivalent - Actually creates the table in the database when run

```sql
CREATE TABLE Users (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  name VARCHAR,
  email VARCHAR,
  phone INTEGER,
  isAdmin BOOLEAN,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

### Run your migration (cause `up` to run)

`npx dotenv sequelize db:migrate`

- Runs every migration
  - Running a migration multiple times will not duplicate tables/data in our database

### Undo your migration (cause `down` to run)

`npx dotenv sequelize db:migrate:undo`

- Undo most recently ran migration

`npx dotenv sequelize db:migrate:undo:all`

- Undo all migrations

## Important Notes For Migrations

Migrations need to be generated and run when we want to make a change to a table

A Migration will NOT automatically update the related Model

- If a change affects a Model, we need to manually update the Model file as well
  - Change column phone to phone_number must be done in BOTH the Model and Migration file

Migration: communicates with the db. Model: intermediary between the User and the db.

---

## Generate a Seeder file

`npx sequelize seed:generate --name name-of-seed`

Notice that Seeders and Migrations are quite similar

```js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
```

Seeders insert data into our tables. This is making a change to the database

- Migrations and Seeders both directly change the content of our database

### Both make use of `queryInterface`

- An interface for us to make queries
- Whether we want to create, insert, update, delete, `queryInterface` has us covered!

To add a demo-user in our example

```js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.createTable() //! We can add as many as we want :)

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Demo User",
          email: "demo@user.com",
          phone: 5555555555,
          isAdmin: true,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", {
      name: ["Demo User"],
    });
  },
};
```

SQL Equivalent - Inserts the data into our User table

```sql
INSERT INTO USERS (name, email, phone, isAdmin)
VALUES ("Demo User", "demo@user.com", 5555555555, true);
```

### Run your seeders (cause `up` to run)

`npx dotenv sequelize db:seed:all`

### Undo your seeders (cause `down` to run)

`npx dotenv sequelize db:seed:undo`

- Undo most recently ran seeder

`npx dotenv sequelize db:seed:undo:all`

- Undo all seeders

---

## Model Validation vs Migration Constraints

The point of a Model is to provide a template for any new data we want to insert into our database

Model level validators will check to see if the data we want to create aligns with our model

- Since these validators are on the Model and not the database, we can create complex validators
  - Custom functions we create will be run on every attempt to use the Model

To create Model Validations, put them in the "constructor" `Model.init()`

- For a single validator, like data types, just assign it to the name of the column
- For multiple validators, assign the column name to an object, and fill that object will validations
- For custom validators, create a `validate` key with an object of validations

```js
User.init(
  {
    name: DataTypes.STRING,

    email: {
      type: DataTypes.STRING,
      validate: {
        isNotMyEmail(value) {
          if (value === "zbrown@appacademy.io") {
            throw new Error("Hey wait that's my email!");
          }
        },
      },
    },

    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    isAdmin: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    modelName: "User",
  }
);
```

The point of a Migration is to make a change to our database

This means Migration constraints are on the **_database_**

- We're limited to using the constraints that we know from SQL
  - These constraints are checked on every attempt to insert data into a table

## General things to keep in mind

- We need to use `dotenv` in our commands when **_running_** a file, we don't need to use it when **_generating_** a file

- Creating a Model file will create a Migration file. Creating a Migration file will NOT create a Model file

- Models should be used when creating a new table

  - Note that a Migration will be required to actually create the table in the database

<br>

- Migrations should be used when making a change to a table

  - Again, this includes creating a table for the first time
  - Also includes adding/removing columns, constraints, or changing names of tables/columns

<br>

- It's good to have duplicated validations/constraints, but not necessary

  - Having `allowNull: false` on both your Model and Migration
  - The more safety the better!
