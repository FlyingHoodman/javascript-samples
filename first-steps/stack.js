

const createStack = function () {
  // ...
};

const stack = createStack();

stack.push(23);
stack.push(42);
console.log(stack.isEmpty()); // => false
console.log(stack.top());     // => 42
console.log(stack.top());     // => 42
console.log(stack.pop());     // => 42
console.log(stack.pop());     // => 23
console.log(stack.isEmpty()); // => true
