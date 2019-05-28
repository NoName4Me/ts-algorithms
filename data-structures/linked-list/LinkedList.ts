/**
 * {value,next} --> {value, next} --> ....
 */
import Comparator from '../../utils/Comparator'
import LinkedListNode from './LinkedListNode'

export default class LinkedList<T> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  compare: Comparator;

  constructor(comparatorFunction?: Function) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  prepend(value: T): LinkedList<T> {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  append(value: T): LinkedList<T> {
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
  remove(value: T): LinkedListNode<T> {
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

  find(value: T, callback?: Function): LinkedListNode<T> {
    if (!this.head) {
      return null
    }
    let findNode: LinkedListNode<T> = this.head;
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

  removeHead(): LinkedListNode<T> {
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

  removeTail(): LinkedListNode<T> {
    const removedNode = this.tail;
    if (this.compare.equal(this.head.value, this.tail.value)) {
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

  toArray(): LinkedListNode<T>[] {
    const nodes: LinkedListNode<T>[] = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  fromArray(values: T[]): LinkedList<T> {
    values.forEach(item => {
      this.append(item);
    })
    return this;
  }

  toString(callback?: Function): string {
    return this.toArray().map(node => node.toString(callback)).join('');
  }
}