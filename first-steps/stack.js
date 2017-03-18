'use strict';

const createStack = function () {
  const items = [];
  let itemsCount = 0;

  const stack = {
    isEmpty () {
      return itemsCount === 0;
    },

    push (value) {
      items[itemsCount] = value;
      itemsCount++;
    },

    top () {
      if (stack.isEmpty()) {
        throw new Error('Stack is empty.');
      }

      return items[itemsCount - 1];
    },

    pop () {
      if (stack.isEmpty()) {
        throw new Error('Stack is empty.');
      }

      itemsCount--;

      return items[itemsCount];
    }
  };

  return stack;
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
