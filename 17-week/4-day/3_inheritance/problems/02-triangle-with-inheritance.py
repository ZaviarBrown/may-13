# Build off your RegularPolygon class and create another class called Triangle.
# The Triangle class should have functionality that calculates both the
# perimeter and the area of the triangle. The calculated values for both the
# perimeter and area should be assigned to respective instance properties on the
# Triangle class.

# The area of a triangle can be calculated with Heron's formula:
# √(s(s-a)(s-b)(s-c)), where s is the semi-perimeter of the triangle. The
# semi-perimeter is the perimeter divided by 2. The square root function sqrt()
# can be imported from the built-in math package.

# Write your class here.


triangle_a = Triangle(3, 3)
print(triangle_a.perimeter) # 9
print(triangle_a.area) # 3.8971...

triangle_b = Triangle(3, 12)
print(triangle_b.perimeter) # 36
print(triangle_b.area) # 62.3538...

triangle_c = Triangle(4, 12)
print(triangle_c.perimeter) # Exception: A triangle must have exactly three sides