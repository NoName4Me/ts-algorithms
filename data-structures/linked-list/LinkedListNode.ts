export default class LinkedListNode {
  value: any;
  next: LinkedListNode;

  constructor(value: Object, next: LinkedListNode = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback?:any) {
    return callback ? callback(this.value) : `${this.value}`
  }
}