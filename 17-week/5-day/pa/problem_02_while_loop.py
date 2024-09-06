# PROBLEM 2 - WHILE LOOP: Sort out the odd numbers...
#
# In this problem, write a function named "while_loop_odds" that accepts an
# iterable of integers as a parameter and returns a new list with only the odd
# numbers from the original list.
#
# *The function MUST use a WHILE LOOP in its implementation.
#
#
# In addition to running `pytest test/test_problem_02_while_loop.py` you can also
# test your code manually using the sample data below.
#
#  ______________________________YOUR CODE BELOW______________________________#


def while_loop_odds(arr):
    final_array = []
    i = 0
    while i < len(arr):
        curr_num = arr[i]
        if curr_num % 2 == 1:
            final_array.append(curr_num)
        i += 1

    return final_array


# __________SAMPLE TEST DATA__________ #
# lst1 = [1,2,4,5,7,9]
# print(while_loop_odds(lst1))      # [1, 5, 7, 9]
# lst2 = [2, 3, 4, 5, 6, 7]
# print(while_loop_odds(lst2))      # [3, 5, 7]
