import { BTNode } from './binary-tree-node';

export class BST<T> {
  root: BTNode<T> | null = null;

  insert(value: T): void {
    const newNode = new BTNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  search(value: T): boolean {
    let current = this.root;

    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  findMin(): T | null {
    if (!this.root) return null;
    let current = this.root;
    while (current.left) current = current.left;
    return current.value;
  }

  findMax(): T | null {
    if (!this.root) return null;
    let current = this.root;
    while (current.right) current = current.right;
    return current.value;
  }

  inorder(node: BTNode<T> | null = this.root): T[] {
    if (!node) return [];
    return [
      ...this.inorder(node.left),
      node.value,
      ...this.inorder(node.right),
    ];
  }
}
