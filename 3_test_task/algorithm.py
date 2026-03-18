class Stack():
    def __init__(self):
        self.items = []

    def push(self, element):
        self.items.append(element)
    
    def pop(self):
        return self.items.pop()
    
    def peek(self):
        return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0
    
s = input()
stack = Stack()

for items in s:
    if items in "({[":
        stack.push(items)
    
    if items == ")":
        if stack.peek() == "(":
            stack.pop()
    
    if items == "}":
        if stack.peek() == "{":
            stack.pop()
    
    if items == "]":
        if stack.peek() == "[":
            stack.pop()

print(stack.is_empty())
