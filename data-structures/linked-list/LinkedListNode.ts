export default class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T>;

  constructor(value: T, next: LinkedListNode<T> = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback?:any) {
    return callback ? callback(this.value) : `${this.value}`
  }
}