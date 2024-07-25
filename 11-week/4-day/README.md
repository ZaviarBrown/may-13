# Inserting Data With Associations

Sequelize also automatically creates methods for us to insert data with

## `instance.createModelName()`

Creates data with an association to the instance

```js
const person = await Person.findOne({ where: { name: "Exa Mple" } });
// returns Person: {
// id: 1,
// name: "Exa Mple"
// }

await person.createJob({ title: "Manager" });
```

## `instance.addModelName()`

Creates an association for data that's already been created

Particularly useful in Many-To-Many situations

```js
// Create or find instances of readers and books
const reader1 = await Reader.create({ userName: "SuperReader109" });
const reader2 = await Reader.create({ username: "Reader McReady" });

const book1 = await Book.create({ title: "The Wind in the Willows" });
const book2 = await Book.create({ title: "Where the Wild Things Are" });

// Add association between a single reader and book
reader1.addBook(book1);

// Add association between one book and multiple readers
book2.addReaders([reader1, reader2]);
```

## `Model.create()`

We also can use the `Model.create()` method we already know, with some extra options

When creating the new data, we can create any associated data at the same time

```js
await Person.create({
  name: "Exa Mple",
  Jobs: [{ title: "Manager"}, {title: "Software Engineer" }],
});
```

This will create a person, two jobs, and the appropriate association between them.