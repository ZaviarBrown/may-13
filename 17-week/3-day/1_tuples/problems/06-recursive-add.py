# Create a recursive function that takes a tuple as an argument and returns the
# summed values in the tuple.


def recursive_add(tup):
    if len(tup) == 1:
        return tup[0]
    return tup[0] + recursive_add(tup[1:])


print(recursive_add((2,)))  # > 2
print(recursive_add((2, 4, 6, 8, 10)))  # > 30
print(recursive_add((25, 50, 75, 100)))  # > 250
