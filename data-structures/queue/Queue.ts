import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  linkedList: LinkedList;

  constructor() {
    this.linkedList = new LinkedList();
  }

  peek(): any {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  }

  isEmpty(): Boolean {
    return !this.linkedList.head;
  }

  enqueue(value): void {
    this.linkedList.addTail(value);
  }

  dequeue():any {
    const removedHead = this.linkedList.removeHead();
    return removedHead ? removedHead.value : null;
  }

  toString(callback?: Function) {
    return this.linkedList.toString(callback);
  }
}