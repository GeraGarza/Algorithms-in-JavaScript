export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  insertHead(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;

    return counter;
  }

  getHead() {
    return null;
  }

  getTail() {
    return null;
  }

  clear() {
  }

  removeHead() {
   
  }

  removeTail() {
    return;
  }

  insertTail(data) {
   
  }

  getAt(index) {
   
    return null;
  }

  removeAt(index) {
    return;
  }

  insertAt(index, data) {
    return;
  }

  forEach(fn) {
   
  }

  *[Symbol.iterator]() {

  }
}
