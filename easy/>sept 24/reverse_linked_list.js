class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  hasOnlyOneNode() {
    let lastNode = this.head;
    this.head = null;
    this.tail = null;
    this.length = 0;
    return lastNode;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  outOfBounds(index) {
    return index < 0 || index > this.length;
  }
  get(index) {
    if (this.outOfBounds()) return null;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  pop() {
    if (this.isEmpty()) return undefined;
    if (this.length === 1) this.hasOnlyOneNode();
    let newTail = this.get(this.length - 2);
    let oldTail = newTail.next;
    this.tail = newTail;
    newTail.next = null;
    return oldTail;
  }
  reverse() {
    if (this.isEmpty()) return this;
    let prev = null;
    let current = this.head;
    this.tail = this.head;
    let next = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return prev;
  }
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
    recursiveReverse() {
        let head = this.head
    function rr(head) {
      if (!head) return null;
      if (!head.next) return head;
      let rev = rr(head.next);
      head.next.next = head;
      head.next = null;
      return rev;
    }
        let temp = rr(head);
        this.head.next = null;
        this.tail = this.head;
        this.head = temp;
        return this;
  }
}

const list = new LinkedList();

list.push(1);
list.push(3);
list.push(5);
console.log(list.print());
console.log(list.recursiveReverse());
console.log(list.print());
