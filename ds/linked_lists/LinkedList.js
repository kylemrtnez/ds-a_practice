const listNode = require('./LinkedListNode');

// Singly linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Time complexity = O(1)
  insertFront(val) {
    const newNode = new listNode.LinkedListNode(val, this.head);
    this.head = newNode;

    if (this.tail === null) {
      this.tail = newNode;
    }

    return this;
  }

  // Time complexity = O(1) (would be O(n) without keeping track of tail)
  insertBack(val) {

    const newNode = new listNode.LinkedListNode(val);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
   return this;
  }

  // Time complexity = O(n)
  remove(val) {
    let curLink = this.head;
    // check first value
    if (curLink.value === val) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        curLink.next = null;
      }
    } else {
      let prevLink;
      // iterate over list
      while (curLink !== null && curLink.value !== val) {
        prevLink = curLink;
        curLink = curLink.next
      }
      // remove if not null
      if (curLink !== null) {
        prevLink.next = curLink.next;
        curLink.next = null;
      }
    }
    return this;
  }

  // Time complexity = O(n)
  contains(val) {
    let curLink = this.head;

    while (curLink !== null && curLink.value !== val) {
      curLink = curLink.next
    }
    
    return curLink === null ? false : (curLink.value === val);
  }
}

module.exports = { LinkedList };
