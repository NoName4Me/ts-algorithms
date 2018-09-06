import LinkedList from '../linked-list/LinkedList';

export default class Stack {
  linkedList: LinkedList;

  constructor() {
    this.linkedList = new LinkedList();
  }

  peek(): any {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.tail.value;
  }

  isEmpty(): Boolean {
    return !this.linkedList.tail;
  }

  push(value): void {
    this.linkedList.addTail(value);
  }

  pop(): any {
    const removedTail = this.linkedList.removeTail();
    return removedTail ? removedTail.value : null;
  }

  toArray(): any[] {
    return this.linkedList.toArray().map(item => item.value).reverse();
  }

  toString(callback?: Function) {
    return this.linkedList.toString(callback);
  }
}