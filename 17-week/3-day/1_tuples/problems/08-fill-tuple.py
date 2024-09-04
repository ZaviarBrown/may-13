# Create a function that takes in a `tuple` of tuples with varying lengths, a
# given `value`, and a given `length`. The function should return a copy of
# tuple where each nested tuple has the specified `length`. To increase a
# tuple's length, the function should append the value the necessary number of
# times. (You may assume that all tuples originally in the tuple have a length
# <= `length`.)


# def fill_tuple(tup, val, length):
#     final = []
#     for el in tup:
#         new_tup = el + (val,) * (length - len(el))
#         final.append(new_tup)
#     return final


def fill_tuple(tup, val, length):
    return [el + (val,) * (length - len(el)) for el in tup]


print(
    fill_tuple(((58, 1, 5), (0, 3), (45,), (24, 23)), 2, 3)
)  # > ((58, 1, 5), (0, 3, 2), (45, 2, 2), (24, 23, 2))
print(
    fill_tuple(((1,), (5, 7), (55, 22), (80, 52, 20)), 5, 4)
)  # > ((1, 5, 5, 5), (5, 7, 5, 5), (55, 22, 5, 5), (80, 52, 20, 5))
print(
    fill_tuple(((), (0, 14), (5, 2, 8), (2, 4, 2, 3)), 0, 5)
)  # > ((0, 0, 0, 0, 0), (0, 14, 0, 0, 0), (5, 2, 8, 0, 0), (2, 4, 2, 3, 0))
