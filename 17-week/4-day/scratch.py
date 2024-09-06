# names = ["Zaviar", "Seika", "Eiki"]
# pets = {
#     "Zaviar": ["Momo", "Tenten", "Kiki"],
#     "Seika": ["Tora", "Sonic", "Dragon"],
#     "Eiki": ["Hime", "Koga"],
# }
# name_iter = iter(names)
# pet_iter = iter(pets)

# dir()

# for el in name_iter:
#     print(el)

# print(name_iter)
# print(pet_iter)

# first_name = next(name_iter)
# second_name = next(name_iter)

# name_iter = iter(names)

# first_name_again = next(name_iter)
# print(first_name_again)
# third_name = next(name_iter)
# fourth_name = next(name_iter)

# print(next(names))

# print(first_name, second_name)
# print(next(pet_iter))


# for el in names:
#     print(el)

# # Looks cleaner, you'll be seeing this a lot later
# def add_a_msg(func_being_decorated):
#     print("2")

#     def my_tacos(another_arg):
#         print(another_arg)
#         print("3")
#         another_arg += " I've come to discuss the matter of our current economy"
#         whatever = func_being_decorated(another_arg)
#         print("line 47", whatever)
#         return whatever + "!"

#     return my_tacos


# def make_a_list(func):
#     print("1")

#     def inner(arg):
#         print("4")
#         print(func)
#         return func([arg])

#     return inner


# @add_a_msg
# @make_a_list  # being decorated by add_a_msg
# def yell_something(arg):  # being decorated by make_a_list
#     print("5")
#     print(arg)
#     return arg[0].upper()


# print(yell_something)
# yell_something("something to go here")
# print(dir(yell_something))
# print(yell_something.__closure__)
# print(yell_something.__closure__[0])
# print(yell_something.__closure__[0].cell_contents)
# print(dir(yell_something.__closure__[0]))
# print(yell_something.__closure__[0].cell_contents)
# print(dir(yell_something.__closure__[0].cell_contents))
# print(yell_something.__closure__[0].cell_contents.__closure__)
# print(dir(yell_something.__closure__[0].cell_contents.__closure__[0]))
# print(yell_something.__closure__[0].cell_contents.__closure__[0].cell_contents)


# print(yell_something("hello darkness my buddy pal"))


# def any_func(take_a_func):
#     def wrapper(arg):
#         print("In wrapper")
#         return take_a_func(arg)

#     return wrapper


# @any_func
# def my_func(arg):
#     print("in my func")
#     return arg


# my_func("Momo")


# def greeting_maker(hello_word):
#     def name_input(name):
#         return f"{hello_word}, {name}!"

#     return name_input


# hello_greeting = greeting_maker("hello")
# # print(hello_greeting("Zaviar"))
# # print(hello_greeting("Seika"))
# # print(hello_greeting("Momo"))
# # print(hello_greeting("Tora"))
# # print(hello_greeting("Naruto"))
# print(hello_greeting.__closure__)  # notice you get back a tuple

# # the first item in the tuple, in this case the only item
# print(hello_greeting.__closure__[0])

# # the value held in the closure
# print(hello_greeting.__closure__[0].cell_contents)

# # basic decorators
# def greeting_decorator(greeting_func):
#     # 1. decorator function intakes a function to invoke
#     # 2. wrapper function is defined
#     def greeting_wrapper(name):
#         # 3. code to run
#         # 4. decorator functions argument is invoked
#         print(f"{greeting_func()}, {name}!")

#     # 5. wrapper function is returned
#     return greeting_wrapper


# def hello():
#     return "Hello"


# print("default func:", hello)  # <function hello at 0x7fe04abf6af0>
# print("default func is closure?:", hello.__closure__)  # None
# hello = greeting_decorator(hello)
# print("closure func:", hello)
# # <function greeting_decorator.<locals>.greeting_wrapper at 0x7f186b2d9c10>
# print("closure func closure:", hello.__closure__)
# # (<cell at 0x7f186b2e1fd0: function object at 0x7f186b2d9af0>,)
# print("closure func closure contents:", hello.__closure__[0].cell_contents)
# # <function hello at 0x7f3125a26af0>


# # syntactic sugar for howdy = greeting_decorator(howdy)
# @greeting_decorator
# def howdy():
#     return "Howdy"


# print("howdy decorated:", howdy)

# ! --------------------------------------------------------------------
# *                             Classes
# ! --------------------------------------------------------------------

# # simple py class
# class Dog:
#     # doesn't have to be self, but is always self by convention
#     def __init__(self):
#         self.sound = "woof"


# my_dog = Dog()
# print(Dog)
# print(my_dog)
# print(my_dog.sound)

# # using methods
# class Dog:
#     def __init__(self):
#         self.sound = "woof"

#     def make_sound(self):
#         print(self.sound)

#     def change_sound(self, sound):
#         self.sound = sound


# my_dog = Dog()
# my_dog.make_sound()
# # notice that we aren't passing in self
# # python does this automatically
# my_dog.change_sound("bark")
# my_dog.make_sound()

# # setting initial state
# class Dog:
#     """
#     This is just a description of the class.
#     This helps other devs understand how to use your class
#     It expects to receive the positional arguments
#     (str:name, str:sound)
#     """

#     def __init__(self, name, sound):
#         print(dir(self))
#         self.name = name
#         self.sound = sound

#     # __doc__ = "This is my doc"


# dog_1 = Dog("Callie", "woof")
# print(dog_1.name, dog_1.sound)
# print(dog_1.__doc__)

# # private variables
# class Dog:
#     def __init__(self, name, sound):
#         """
#         Use a leading underscore on instance variables
#         that shouldn't be accessed when using the class.
#         This isn't an actual python feature, its a convention.
#         All instance variables should be private,
#         except for any variables you explicitly want to be public
#         """
#         self._name = name
#         self._sound = sound

#     def get_name(self):
#         return self._name

#     def get_sound(self):
#         return self._sound


# dog_1 = Dog("Callie", "woof")
# print(dog_1.get_name(), dog_1.get_sound())
# print(dog_1._name, dog_1._sound)

# Pretty printing: because
# <__main__.Dog object at 0x7f36545b5fd0>
# is ugly
# class Dog:
#     __slots__ = ["_name", "_sound"]

#     def __init__(self, name, sound):
#         self._name = name
#         self._sound = sound

#     def get_name(self):
#         return self._name

#     def get_sound(self):
#         return self._sound

#     def __repr__(self) -> list[str]:
#         # Another fancy dunder method
#         # python will use this whenever you try to print
#         # an instance of this class
#         return f"<Dog (name: {self._name}, sound: {self._sound})>"
#         # return [
#         #     self._name,
#         #     self._sound,
#         # ]  #! Throws an error, some things never change :(
#         # return f"[{self._name}, {self._sound}]"


# dog_1 = Dog("Callie", "woof")
# print(dog_1)

# # no decorators
# class Dog:
#     def __init__(self):
#         self._sound = "woof"

#     def get_sound(self):
#         return self._sound

#     def change_sound(self, new_sound):
#         self._sound = new_sound

#     def del_sound(self):
#         del self._sound


# my_dog = Dog()
# print(my_dog.get_sound())

# my_dog.change_sound("bark")
# print(my_dog.get_sound())

# my_dog.del_sound()
# print(my_dog.get_sound())

# # with decorators
# class Dog:
#     def __init__(self):
#         self._sound = "woof"

#     @property
#     def sound(self):
#         # print("This is totally running!")
#         return self._sound

#     @sound.setter
#     def sound(self, new_sound):
#         if new_sound == "bad string":
#             print("can't do that!")
#         else:
#             self._sound = new_sound

#     @sound.deleter
#     def sound(self):
#         del self._sound
#         print("no more sound")


# my_dog = Dog()
# print(my_dog.sound)

# my_dog.sound = "bark"
# print(my_dog.sound)


# my_dog.sound = "bad string"
# print(my_dog.sound)

# del my_dog.sound
# print(my_dog.sound)


# class Dog:
#     def __init__(self):
#         self.sound = "woof"
#         return

#     @property
#     def sound(self):
#         print("This is running")
#         return self._sound

#     @sound.setter
#     def sound(self, new_sound):
#         print("new sound", new_sound)
#         self._sound = new_sound


# my_dog = Dog()  # new sound woof

# my_dog.sound  # This is running
# my_dog.sound = "Bark"  # new sound Bark

# my_dog.sound = "Bark"
# print(my_dog.sound)

# print(my_dog.get_sound())
# print(my_dog.sound)


# class Dog:
#     def __init__(self):
#         self._sound = "woof"

#     @property
#     def sound(self):
#         return self._sound

#     @sound.setter
#     def sound(self, new_sound):
#         self._sound = new_sound

#     @sound.deleter
#     def sound(self):
#         del self._sound
#         print("no more sound")


# my_dog = Dog()
# print(my_dog.sound)

# my_dog.sound = "bark"
# print(my_dog.sound)

# del my_dog.sound
# print(my_dog.sound)


# class Example:
#     a_class_variable = "Hello there!"

#     def __init__(self, name):
#         self.name = name

#     def test_method(self):
#         print(self.a_class_variable)


# my_instance = Example("Zaviar")

# my_instance.test_method()  # Hello there!
# print(Example.a_class_variable)  # Hello there!
# # print(Example.test_method())  #! Error


# class Example:
#     a_class_variable = "Hello there!"

#     def __init__(self, name):
#         self.name = name
#         # self.a_class_variable = "Don't look now!"

#     def test_method(self):
#         print(self.a_class_variable)


# my_instance = Example("Zaviar")
# my_instance.test_method()  # Hello there!

# Example.a_class_variable = "Goodbye now!"

# print(Example.a_class_variable)  # Goodbye now!
# my_instance.test_method()  # Goodbye now!


# class Example:
#     a_class_variable = "Hello there!"

#     def __init__(self, name):
#         self.name = name

#     def test_method(self):
#         print(self.a_class_variable)


# my_instance = Example("Zaviar")
# other_instance = Example("Anthony")

# other_instance.a_class_variable = "Goodbye now!"


# other_instance.test_method()  # Goodbye now!
# print(Example.a_class_variable)  # Hello there!
# my_instance.test_method()  # Hello there!

# Example.a_class_variable = "What now?"

# other_instance.test_method()  # Goodbye now!
# print(Example.a_class_variable)  # What now?
# my_instance.test_method()  # What now?
# class Example:
#     __slots__ = ["name"]

#     a_class_variable = "Hello there!"

#     def __init__(self, name):
#         self.name = name

#     def test_method(self):
#         print(self.a_class_variable)


# my_instance = Example("Zaviar")
# my_instance.test_method()

# # my_instance.a_class_variable = "Goodbye"  # Attribute Error: Read-only
# Example.a_class_variable = "Goodbye"  # Works fine

# my_instance.test_method()


# class Example:
#     a_class_variable = "Hello there!"

#     def __init__(self, args, that_the, class_needs):
#         self.args = args
#         self.that_the = that_the
#         self.class_needs = class_needs

#     @classmethod
#     def new_instance_creator(cls, args, that_the, class_needs):
#         print(cls.a_class_variable)  # "Hello there!" - Class variable
#         # print(cls.args)  # Error - Instance variable
#         # print(cls.that_the)  # Error - Instance variable
#         # print(cls.class_needs)  # Error - Instance variable

#         return cls(args, that_the, class_needs)


# me = Example("args", "that the", "class needs")

# print(me.args)

# new_me = me.new_instance_creator("args 2", "that the 2", "class needs 2")

# print(new_me.args)

# final_me = Example.new_instance_creator("args 3", "that the 3", "class needs 3")

# print(final_me.args)


# class Example:
#     a_class_variable = "Hello there!"

#     def __init__(self, name):
#         self.name = name

#     @classmethod
#     def my_func(cls):
#         return "Hellooooo"

#     def my_func(self):
#         return "Hey"

#     @staticmethod
#     def my_static_method(*args):
#         return [instance.name for instance in args]


# z = Example("Zaviar")
# a = Example("Anthony")

# # print(z.my_static_method(z, a))  # ['Zaviar', 'Anthony']

# # print(Example.my_static_method(a))  # ['Anthony']


# print(Example.my_func("whatever"))
# print(z.my_func())


# class Item:
#     def __init__(self, name, cost):
#         self.name = name
#         self.cost = cost

#     def __repr__(self):
#         return f"< class Item | name: {self.name}, cost: ${self.cost} >"

#     @classmethod
#     def bulk_create_items(cls, *args):
#         return [cls(name, cost) if cost else cls(name, 10) for name, cost in args]

#     @staticmethod
#     def total_cost(*args):
#         return f"${sum([el.cost for el in args])}"


# milk, chair, shirt = Item.bulk_create_items(
#     ("Milk", 3), ("Chair", 15), ("T-shirt", None)
# )

# print(milk)  # < class Item | name: Milk, cost: $3 >
# print(chair)  # < class Item | name: Chair, cost: $15 >
# print(shirt)  # < class Item | name: T-shirt, cost: $10 >

# cart_total = Item.total_cost(milk, chair, shirt)
# # cart_total = milk.total_cost(milk, chair, shirt)
# print(cart_total)  # $28


class Parent:
    def test(self):
        print("I am a parent class")

    def big_method(self):
        print("This method originated from the parent")

    def medium_method(self):
        print("Did you get me to print?")


class Child(Parent):
    def test(self):
        print("I am a child class")
        super().test()

    def small_method(self):
        super().big_method()


child = Child()
child.test()
child.small_method()
child.medium_method()
