# print (2 == '2')    # => False
# print (2 is '2')    # => False
# print ("2" == '2')    # => True
# print ("2" is '2')    # => True
# print (2 == 2.0)    # => True
# print (2 is 2.0)    # => False
# obj1 = {'hello': 'world'}
# obj2 = {'hello': 'world'}
# print(obj1 == obj2) # => True
# print(obj1 is obj2) # => False

# if (obj1 == obj2):
#     print("heyoo")

# count = 0
# while count < 5:
#     print("uh oh")
#     if count == 2:
#         continue # go on to the next loop NOW!
#     print(count)
#     count += 1

# word = 'hello'
# for letter in word: # for let i = 0 // let letter = word[i]
#   print(letter)

# # if you need an index
# for i in range(len(word)):
#     print(i)
#     print(word[i])
#     print({i: word[i]})

# nums = range(5)
# print(type(nums)) 

# obj1 = {
#     'hello': 'world',
#     'goodbye': 'planet'
# }
# print(len(obj1))  

# def parameters(banana, banan2, *args):
#   print(banana, banan2, args)
  
# parameters('hello', 1, 2, 3, 4) # hello 1 (2, 3, 4)



# def parameters(positional, *args, anyValue='default', **bananable_again):
#     print(positional, args, anyValue, bananable_again)
# parameters('hello', 1, 2, 3, 4, test='testing', world='earth')
# parameters('hello', 1, 2, 3, 4, anyValue="hey python!", test='testing', world='earth')

# def parameters(positional: str, **bananable_again):
#     print(positional, bananable_again)
# # parameters('hello', 1, 2, 3, 4) #! TypeError: parameters() takes 1 positional argument but 5 were given
# parameters('hello', first_num=1, second_num=2) # hello {'first_num': 1, 'second_num': 2}


# # It is considered best practice to use positional arguments for parameters without default values and keyword arguments for parameters with default values
# def default_value(a, b='b'):
#   print(a, b)

# b = 'd'  
  
# default_value('a') # a b
# default_value('a', 'c') # a c
# default_value('a', b) # a d


# def parameters( *args,  **kwargs):
#     print(args, kwargs)
    
# painting = 'Mona Lisa'

# # parameters('blue', painting, color='yellow')
# # parameters('blue', color='yellow', painting) #! Positional argument cannot appear after keyword arguments
# parameters('blue', color='yellow', painting=painting)

# def yell(input):
#     return input.upper()

# yell = lambda input_one, input_two: input_one.upper() + input_two.lower()
# print(yell('hello', "GOODBYE"))

# nums = [1, 2, 3, 4, 5]
# doubled_nums = []

# for num in nums:
#     doubled_nums.append(num * 2)

# nums = [1, 2, 3, 4, 5]
# doubled_nums = [num * 2 for num in nums]
    
# # print(doubled_nums)

# nums = [1, 2, 3, 4, 5]
# # even_double_odd_zero = []
# even_double_odd_zero = [x * 2 if x % 2 == 0 else 0 for x in nums if x != 1]

# # for x in nums:
# #     if x != 1:
# #         if x % 2 == 0:
# #             even_double_odd_zero.append(x * 2)
# #         else:
# #             even_double_odd_zero.append(0)

# print(even_double_odd_zero)

str_list = ['a', 'ab', 'abc', 'abcd', 'abcde']

short_list = [string if len(string) < 4 else None for string in str_list]
print(short_list) # ['a', 'ab', 'abc', None, None]

short_list = [string if (len(string) > 2) else string + "heyoooo" for string in str_list if len(string) < 4]
print(short_list) # ['a', 'ab', 'abc']

# [ |thing to add to the list (and conditions)|   |loop|   |when I should add it to the list| ]