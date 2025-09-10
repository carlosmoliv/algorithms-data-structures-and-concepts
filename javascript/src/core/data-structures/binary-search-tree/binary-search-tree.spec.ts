import { BST } from './binary-search-tree';

describe('BinarySearchTree', () => {
  let bst: BST<number>;

  beforeEach(() => {
    bst = new BST<number>();
  });

  test('should insert nodes correctly', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    expect(bst.root?.value).toBe(10);
    expect(bst.root?.left?.value).toBe(5);
    expect(bst.root?.right?.value).toBe(15);
  });

  test('should find inserted values', () => {
    [10, 5, 15, 3, 7].forEach((n) => bst.insert(n));

    expect(bst.search(7)).toBe(true);
    expect(bst.search(3)).toBe(true);
    expect(bst.search(20)).toBe(false);
  });

  test('should return min and max correctly', () => {
    [10, 5, 15, 3, 7].forEach((n) => bst.insert(n));

    expect(bst.findMin()).toBe(3);
    expect(bst.findMax()).toBe(15);
  });

  test('should handle min and max on empty tree', () => {
    expect(bst.findMin()).toBeNull();
    expect(bst.findMax()).toBeNull();
  });

  test('should return inorder traversal', () => {
    [10, 5, 15, 3, 7].forEach((n) => bst.insert(n));

    expect(bst.inorder()).toEqual([3, 5, 7, 10, 15]);
  });

  test('should return empty array for inorder on empty tree', () => {
    expect(bst.inorder()).toEqual([]);
  });
});
