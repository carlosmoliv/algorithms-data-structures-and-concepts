// Node for BST
class BSTNode<T> {
  value: T;
  left: BSTNode<T> | null = null;
  right: BSTNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BinarySearchTree<T> {
  root: BSTNode<T> | null = null;

  insert(value: T): void {
    const newNode = new BSTNode(value);

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

  inorder(node: BSTNode<T> | null = this.root): T[] {
    if (!node) return [];
    return [
      ...this.inorder(node.left),
      node.value,
      ...this.inorder(node.right),
    ];
  }

  preorder(node: BSTNode<T> | null = this.root): T[] {
    if (!node) return [];
    return [
      node.value,
      ...this.preorder(node.left),
      ...this.preorder(node.right),
    ];
  }

  postorder(node: BSTNode<T> | null = this.root): T[] {
    if (!node) return [];
    return [
      ...this.postorder(node.left),
      ...this.postorder(node.right),
      node.value,
    ];
  }

  levelOrder(): T[] {
    const result: T[] = [];
    const queue: (BSTNode<T> | null)[] = [];

    if (this.root) queue.push(this.root);

    while (queue.length) {
      const node = queue.shift()!;
      result.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }

  findHeight(node: BSTNode<T> | null = this.root): number {
    if (!node) return -1;
    return (
      1 + Math.max(this.findHeight(node.left), this.findHeight(node.right))
    );
  }

  size(node: BSTNode<T> | null = this.root): number {
    if (!node) return 0;
    return 1 + this.size(node.left) + this.size(node.right);
  }

  delete(value: T, node: BSTNode<T> | null = this.root): BSTNode<T> | null {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.delete(value, node.left);
    } else if (value > node.value) {
      node.right = this.delete(value, node.right);
    } else {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        const successor = this.minValueNode(node.right);
        node.value = successor.value;
        node.right = this.delete(successor.value, node.right);
      }
    }
    return node;
  }

  private minValueNode(node: BSTNode<T>): BSTNode<T> {
    let current = node;
    while (current.left) current = current.left;
    return current;
  }
}

const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log('Search 7:', bst.search(7));
console.log('Min:', bst.findMin());
console.log('Max:', bst.findMax());
console.log('Inorder:', bst.inorder());
console.log('Preorder:', bst.preorder());
console.log('Postorder:', bst.postorder());
console.log('Level Order:', bst.levelOrder());
console.log('Height:', bst.findHeight());
console.log('Size:', bst.size());

bst.delete(5);
console.log('Inorder after deleting 5:', bst.inorder());
