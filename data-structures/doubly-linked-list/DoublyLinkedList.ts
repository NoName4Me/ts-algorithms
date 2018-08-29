import DoublyLinkedListNode from './DoublyLinkedListNode'
import Comparator from '../../utils/Comparator'

export default class DoublyLinkedList {
  head: DoublyLinkedListNode;
  tail: DoublyLinkedListNode;
  compare: Comparator;

  constructor(comparatorFunction?: Object) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  addHead(value: any): DoublyLinkedList {
    const node: DoublyLinkedListNode = new DoublyLinkedListNode(value, this.head);

    if (!this.head) {
      this.head = node;;
      this.tail = node;
      return this;
    }

    this.head.previous = node;
    this.head = node;

    return this;
  }

  addTail(value: any): DoublyLinkedList {
    const node: DoublyLinkedListNode = new DoublyLinkedListNode(value, null, this.tail);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;

    return this;
  }

  find(value: any, callback?: Function): DoublyLinkedListNode {
    if (!this.head) {
      return null;
    }

    let currentNode: DoublyLinkedListNode = this.head;
    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  remove(value: any): DoublyLinkedListNode {
    if (!this.head) {
      return null;
    }

    let removedNode = null;
    let currentNode: DoublyLinkedListNode = this.head;
    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        removedNode = currentNode;

        if (this.compare.equal(removedNode, this.head)) {
          this.head = removedNode.next;
          if (this.head) {
            this.head.previous = null;
          }
          if (this.compare.equal(removedNode, this.tail)) {
            this.tail = null
          }
        } else if (this.compare.equal(removedNode, this.tail)) {
          this.tail = removedNode.previous;
          this.tail.next = null;
        } else {
          removedNode.previous.next = removedNode.next;
          removedNode.next.previous = removedNode.previous;
        }
      }
      currentNode = currentNode.next;
    }
    return removedNode;
  }

  toArray(): any {

  }

  toString(callback?: Function): string {
    let str: string = '';
    let node = this.head;
    while (node) {
      str += node.toString(callback)
      node = node.next;
    }
    return str;
  }
}