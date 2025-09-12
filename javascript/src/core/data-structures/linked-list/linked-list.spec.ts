import { describe, expect, test, beforeEach } from '@jest/globals';
import { SinglyLinkedList } from './singly-linked-list';

describe('SinglyLinkedList', () => {
  let list: SinglyLinkedList<number>;

  beforeEach(() => {
    list = new SinglyLinkedList<number>();
  });

  test('appends elements to the end', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('prepends elements to the start', () => {
    list.append(2);
    list.append(3);
    list.prepend(1);

    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('finds existing elements', () => {
    list.append(5);
    list.append(10);
    list.append(15);

    const node = list.find(10);

    expect(node?.value).toBe(10);
  });

  test('returns null when element is not found', () => {
    list.append(1);

    expect(list.find(99)).toBeNull();
  });

  test('deletes the head element', () => {
    list.append(1);
    list.append(2);
    list.delete(1);

    expect(list.toArray()).toEqual([2]);
  });

  test('deletes a middle element', () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.delete(2);

    expect(list.toArray()).toEqual([1, 3]);
  });

  test('deletes the last element', () => {
    list.append(1);
    list.append(2);
    list.delete(2);

    expect(list.toArray()).toEqual([1]);
  });

  test('does nothing when deleting a non-existent value', () => {
    list.append(1);
    list.delete(99);

    expect(list.toArray()).toEqual([1]);
  });

  test('handles deletion from an empty list gracefully', () => {
    expect(() => list.delete(1)).not.toThrow();
  });
});
