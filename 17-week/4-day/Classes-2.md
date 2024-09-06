# 2 Weird Tricks That a/A Doesn't Want You To Know?!?! 🤪

For some reason a/A didn't give you a reading on this content, and then gave you problems that require your knowledge of them. So here we go!

## Class & Instance Variables

Created on the class and accessed through `self.variable_name` or `Class.variable_name`

```py
class Example:
    a_class_variable = "Hello there!"

    def __init__(self, name):
        self.name = name

    def test_method(self):
        print(self.a_class_variable)


my_instance = Example("Zaviar")

my_instance.test_method() # Hello there!
print(Example.a_class_variable) # Hello there!
```

Modifying a class variable on the class will update it for all instances

```py
class Example:
    a_class_variable = "Hello there!"

    def __init__(self, name):
        self.name = name

    def test_method(self):
        print(self.a_class_variable)


my_instance = Example("Zaviar")
my_instance.test_method()  # Hello there!

Example.a_class_variable = "Goodbye now!"

print(Example.a_class_variable)  # Goodbye now!
my_instance.test_method()  # Goodbye now!
```

Modifying it on an INSTANCE will not update all instances

- Instead, creates a brand new variable on the instance

```py
class Example:
    a_class_variable = "Hello there!"

    def __init__(self, name):
        self.name = name

    def test_method(self):
        print(self.a_class_variable)


my_instance = Example("Zaviar")
other_instance = Example("Anthony")

other_instance.a_class_variable = "Goodbye now!"


other_instance.test_method()  # Goodbye now!
print(Example.a_class_variable)  # Hello there!
my_instance.test_method()  # Hello there!
```

If you want a class variable to be constant, convention is to make it all uppercase `A_CLASS_VARIABLE`

Remember `__slots__`? That was a class variable. It holds instance variables, and prevents overwriting/creating class variables on an instance

```py
class Example:
    __slots__ = ['name']

    a_class_variable = "Hello there!"

    def __init__(self, name):
        self.name = name

    def test_method(self):
        print(self.a_class_variable)


my_instance = Example("Zaviar")
my_instance.a_class_variable = "Goodbye" # Attribute Error: Read-only
Example.a_class_variable = "Goodbye" # Works fine
```

## Class & Static Methods

Both methods can be called on the class OR on an instance

- When calling on an instance, it's ignored and the main class is used anyway

### `@classmethod` is a decorator to create a class method

- First argument must be `cls`
  - Just like `self` with other methods
- `cls` is the class itself, and can be used to create instances

- Has access to **_class variables_** through `cls`

```py
class Example:
    a_class_variable = "Hello there!"

    def __init__(self, args, that_the, class_needs):
        self.args = args,
        self.that_the = that_the,
        self.class_needs = class_needs

    @classmethod
    def new_instance_creator(cls, args, that_the, class_needs):
        print(cls.a_class_variable)  # "Hello there!" - Class variable
        print(cls.args)  # Error - Instance variable
        print(cls.that_the)  # Error - Instance variable
        print(cls.class_needs)  # Error - Instance variable
```

### `@staticmethod` is a decorator to create a static method

- No mandatory first argument

- Don't have access to class variables by default

  - If you want to interact with the class/instance, you have to pass it as an argument

- Often is passed instances

```py
class Example:
    a_class_variable = "Hello there!"

    def __init__(self, name):
        self.name = name

    @staticmethod
    def my_static_method(*args):
        return [instance.name for instance in args]


z = Example("Zaviar")
a = Example("Anthony")

print(z.my_static_method(z, a)) # ['Zaviar', 'Anthony']

print(Example.my_static_method(a)) # ['Anthony']
```

## When should I use one over the other?

They do similar things so it can be hard to know when to use one over the other

Generally:

- `@classmethod` is used when creating a class "factory"

  - Use the `cls` argument to create multiple instances

- `@staticmethod` is used when creating a utility function
  - Often times performing a calculation

```py
class Item:

    def __init__(self, name, cost):
        self.name = name
        self.cost = cost

    def __repr__(self):
        return f'< class Item | name: {self.name}, cost: ${self.cost} >'

    @classmethod
    def bulk_create_items(cls, *args):
        return [cls(name, cost) if cost else cls(name, 10)
                for name, cost in args]

    @staticmethod
    def total_cost(*args):
        return f'${sum([el.cost for el in args])}'


milk, chair, shirt = Item.bulk_create_items(
    ('Milk', 3), ('Chair', 15), ("T-shirt", None))

print(milk)  # < class Item | name: Milk, cost: $3 >
print(chair)  # < class Item | name: Chair, cost: $15 >
print(shirt)  # < class Item | name: T-shirt, cost: $10 >

cart_total = Item.total_cost(milk, chair, shirt)
print(cart_total)  # $28
```
