class ListNode<T> {
  readonly value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;

  append(value: T): void {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail = newNode;
    this.tail!.next = newNode;
  }

  prepend(value: T) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  find(value: T) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  delete(value: T) {
    if (!this.head) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      if (!current.next) {
        this.tail = current;
      }
    }
  }

  print(): void {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(' -> '));
  }
}

const linkedList = new LinkedList<number>();
linkedList.append(12);
linkedList.append(34);
linkedList.append(56);
linkedList.prepend(1);

linkedList.print(); // Output: 1 -> 12 -> 34 -> 56

const findValue = linkedList.find(34);
console.log(`Value found: ${findValue}`);

const notFoundValue = linkedList.find(99);
console.log(`Value found: ${notFoundValue}`);

linkedList.delete(34);
linkedList.print(); // Output: 1 -> 12 -> 56
