# 🐍 🐍 🐍

## Strings are pretty cool

### Use triple strings to create a large text block for you to write in

```py
"""
They're kind of like comments!
But they can also be used for documentation, more on that tomorrow!
"""

'''
Single quotes work too!
'''
```

## List comprehensions

### Standard way to write comps, but hard to read as they get longer

```py
# Best for short comps
nums_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

even_nums = [el for el in nums_list if el % 2 == 0]

print(even_nums)  # [2, 4, 6, 8, 10]
```

### We can break them up to make it easier to follow logic!

```py
even_nums = [
    el  # value to keep
    for el in nums_list  # what to loop over
    if el % 2 == 0  # condition to filter by
]
```

### This list comp functions identically to JS's `.filter()`

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNums = nums.filter((el) => el % 2 === 0);

console.log(evenNums); // [2, 4, 6, 8, 10]
```

### `.find()`

```js
const allSpots = [
  { id: 1, name: 'Literally The White House', price: 2000 },
  { id: 2, name: 'Literally A Cardboard Box', price: 5 },
  { id: 3, name: 'Literally Touch Grass Kid', price: 420 },
];

const spotId = 2;

const currentSpot = allSpots.find((spot) => spot.id === spotId);
```

```py
all_spots = [
  {"id": 1, "name": "Literally The White House", "price": 2000},
  {"id": 2, "name": "Literally A Cardboard Box", "price": 5},
  {"id": 3, "name": "Literally Touch Grass Kid", "price": 420},
]

spot_id = 2

current_spot = [spot for spot in all_spots if spot["id"] == spot_id]
```
