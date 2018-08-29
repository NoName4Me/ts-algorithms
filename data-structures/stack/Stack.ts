import LinkedList from '../linked-list/LinkedList';

export default class Stack<T> {
  linkedList: LinkedList<T>;
  length: number;

  constructor() {
    this.linkedList = new LinkedList();
    this.length = 0;
  }

  peek(): T {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.tail.value;
  }

  isEmpty(): Boolean {
    return !this.linkedList.tail;
  }

  push(value: T): void {
    this.linkedList.append(value);
    this.length ++;
  }

  pop(): T {
    const removedTail = this.linkedList.removeTail();
    if(removedTail) {
      this.length --;
      return removedTail.value;
    }
    return null;
  }

  toArray(): T[] {
    return this.linkedList.toArray().map(item => item.value).reverse();
  }

  toString(callback?: Function) {
    return this.linkedList.toString(callback);
  }
}