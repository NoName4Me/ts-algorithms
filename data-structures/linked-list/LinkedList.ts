/**
 * {value,next} --> {value, next} --> ....
 */
import Comparator from '../../utils/Comparator'
import LinkedListNode from './LinkedListNode'

export default class LinkedList {
  head: LinkedListNode;
  tail: LinkedListNode;
  compare: Comparator;

  constructor(comparatorFunction?: object) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  addHead(value: any): LinkedList {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  addTail(value: any): LinkedList {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  // 移除所有匹配的节点
  remove(value: any): LinkedListNode {
    if (!this.head) {
      return null;
    }

    let removedNode = null;

    // 从开头就有匹配的
    while (this.head && this.compare.equal(this.head.value, value)) {
      removedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;
    if (currentNode) {
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          removedNode = currentNode.next;
          currentNode.next = currentNode.next.next; // 删除
        } else {
          currentNode = currentNode.next // 移动
        }
      }
    }

    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode // 将 TAIL 移动到末尾（当末尾也需要删除时，TAIL 应该是 null 了，别无他用）
    }

    return removedNode;
  }

  find(value: any, callback?: any): LinkedListNode {
    if (!this.head) {
      return null
    }
    let findNode: LinkedListNode = this.head;
    while (findNode) {
      if (callback && callback(findNode.value)) {
        return findNode;
      }

      if (value !== undefined && this.compare.equal(findNode.value, value)) {
        return findNode;
      }

      findNode = findNode.next;
    }
    return null;
  }

  removeHead(): LinkedListNode {
    if (!this.head) {
      return null;
    }

    const removedNode = this.head;
    if (this.head.next) {
      this.head = this.head.next;

    } else {
      this.head = null;
      this.tail = null;
    }

    return removedNode;
  }

  removeTail(): LinkedListNode {
    const removedNode = this.tail;
    if (this.compare.equal(this.head, this.tail)) {
      this.head = null;
      this.tail = null;
      return removedNode;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next
      }
    }
    this.tail = currentNode;
    
    return removedNode;
  }

  toString(callback?: any): String {
    let node = this.head;
    let str = '';
    while (node) {
      str += node.toString();
      node = node.next;
    }
    return str;
  }
}