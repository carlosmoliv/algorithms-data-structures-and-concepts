// Stack
class Stack<T> {
  private readonly items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T): void {
    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack<number>();
stack.push(2);
stack.push(8);
stack.push(12);

console.log('peek', stack.peek());
stack.pop();
console.log('peek', stack.peek());
console.log('isEmpty', stack.isEmpty());
