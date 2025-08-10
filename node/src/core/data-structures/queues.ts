class Queue<T> {
  private readonly items: T[];

  constructor() {
    this.items = [];
  }

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();
queue.enqueue(7);
queue.enqueue(4);
queue.enqueue(5);

console.log('peek', queue.peek());
queue.dequeue();
console.log('peek', queue.peek());
