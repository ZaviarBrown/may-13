# In this practice, you will use classes to implement a binary search tree and
# perform pre-order, in-order, and post-order traversal of the tree.

# Implement a class Node with a constructor method that defines the following
# instance properties:
# - The left child of the node, initialized to None
# - The right child of the node, initialized to None
# - The value of the node, initialized to the value passed into the constructor

# Implement another class Tree with the following instance methods:
# - insert() that takes in the root node and a new node and places the new node
#   in the correct location in the binary search tree
# - pre__traversal() that traverses the tree and prints the value of each
#   node in pre-order succession
# - in_order_traversal() that traverses the tree and prints the value of each
#   node in in-order succession
# - post_order_traversal() that traverses the tree and prints the value of each
#   node in post-order succession


class Node:
    def __init__(self, value):
        self.left = None
        self.right = None
        self.value = value


class Tree:
    def insert(self, current_node, new_node):
        if not current_node:
            return new_node

        if current_node.value < new_node.value:
            current_node.right = self.insert(current_node.right, new_node)
        else:
            current_node.left = self.insert(current_node.left, new_node)

        return current_node

    def pre_order_traversal(self, node):
        if node:
            print(node.value)
            self.pre_order_traversal(node.left)
            self.pre_order_traversal(node.right)

    def in_order_traversal(self, node):
        if node:
            self.in_order_traversal(node.left)
            print(node.value)
            self.in_order_traversal(node.right)

    def post_order_traversal(self, node):
        if node:
            self.post_order_traversal(node.left)
            self.post_order_traversal(node.right)
            print(node.value)


tree = Tree()

root = Node(4)
tree.insert(root, Node(1))
tree.insert(root, Node(2))
tree.insert(root, Node(3))

print("** PRE ORDER: **")
tree.pre_order_traversal(root)  # 4, 1, 2, 3

print("** IN ORDER: **")
tree.in_order_traversal(root)  # 1, 2, 3, 4

print("** POST ORDER: **")
tree.post_order_traversal(root)  # 3, 2, 1, 4
