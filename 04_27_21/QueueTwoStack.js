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
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  enqueue(item) {
    this.firstStack.push(item);
  }

  dequeue() {
    let oldestItem = null;

    // move items from firstStack to secondStack
    while (this.firstStack.items.length > 0) {
      this.secondStack.push(this.firstStack.items.pop());
    }

    // move items back from secondStack to firstStack
    while (this.secondStack.items.length > 0) {
      const newItem = this.secondStack.pop(); // the oldests elements in order of enqueuing

      // oldestItem === null ? oldestItem = newItem : this.firstStack.push(newItem);
      if (oldestItem === null) {
      // if this is the oldest item, remember it, so we can return it at the end
        oldestItem = newItem;
      } else {
      // otherwise, it is not the oldest item, so push it back to the stack in order
        this.firstStack.push(newItem);
      }
    }

    return oldestItem;
  }
}

// Tests

const queue = new QueueTwoStacks();

queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.dequeue();
queue.enqueue('d');
queue.dequeue();

console.log(queue);