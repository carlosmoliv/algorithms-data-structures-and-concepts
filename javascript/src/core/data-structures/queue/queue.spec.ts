import { Queue } from './queue';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  it('should be empty when initialized', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBeUndefined();
    expect(queue.dequeue()).toBeUndefined();
  });

  it('should enqueue items and not be empty', () => {
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(1);
  });

  it('should dequeue items in FIFO order', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.isEmpty()).toBe(true);
  });

  it('should peek without removing the item', () => {
    queue.enqueue(42);
    expect(queue.peek()).toBe(42);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.dequeue()).toBe(42);
  });
});
