import { Stack } from './stack';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  it('should start empty', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBeUndefined();
  });

  it('should push items onto the stack', () => {
    stack.push(1);
    stack.push(2);

    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBe(2);
  });

  it('should pop items from the stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);

    stack.pop();
    expect(stack.peek()).toBe(20);

    stack.pop();
    expect(stack.peek()).toBe(10);

    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should handle pop on empty stack gracefully', () => {
    expect(stack.pop()).toBeUndefined();
    expect(stack.peek()).toBeUndefined();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should return the top element with peek without removing it', () => {
    stack.push(5);
    stack.push(15);

    const top = stack.peek();
    expect(top).toBe(15);
    expect(stack.isEmpty()).toBe(false);
  });
});
