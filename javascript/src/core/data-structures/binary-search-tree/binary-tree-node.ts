export class BTNode<T> {
  value: T;
  left: BTNode<T> | null = null;
  right: BTNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}
