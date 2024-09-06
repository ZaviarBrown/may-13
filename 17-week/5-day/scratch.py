# ! ----------------------------------------------------------------------------
# * ----- New Problem 09 for real assessment accuracy
# ! ----------------------------------------------------------------------------


def new_func(cb):
    def wrapper(arg):
        return cb(arg)

    return wrapper


def old_func(arg):
    return arg


old_func = new_func(old_func)  # ! Functionally identical
# @new_func
# def old_func(): # ! Functionally identical
#     pass

# ! ----------------------------------------------------------------------------
# * ----- Kwarg testing
# ! ----------------------------------------------------------------------------


# def some_func(num1, num2, first="1", second="2", third="3", **kwargs):
#     return num1, num2, first, second, third, kwargs


# first = 5

# print(some_func(1, 2, 3, second=5))
