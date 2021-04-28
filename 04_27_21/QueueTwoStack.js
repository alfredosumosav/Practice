class Stack {
  constructor() {

    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {

    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Return the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  length() {
    return this.items.length;
  }
}

class QueueTwoStacks {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue(item) {
    this.inStack.push(item);
  }

  dequeue() {
    if (this.outStack.length() === 0) {

      // move items from inStack to outStack, reversing order
      while (this.inStack.length() > 0) {
        const newestInStackItem = this.inStack.pop();
        this.outStack.push(newestInStackItem);
      }

      // if outStack is still empty, raise an error
      if (this.outStack.length() === 0) {
        throw new Error("Can't dequeue from an empty queue!");
      }
    }
    return this.outStack.pop();
  }
}

// Tests

const queue = new QueueTwoStacks();

queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.dequeue();
queue.enqueue('d');
// queue.dequeue();

console.log(queue);