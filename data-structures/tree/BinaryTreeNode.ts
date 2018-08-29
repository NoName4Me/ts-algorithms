import HashTable from "../hash-table/HashTable";
import Comparator from "../../utils/Comparator";

export default class BinaryTreeNode<T> {
  left: BinaryTreeNode<T>;
  right: BinaryTreeNode<T>;
  parent: BinaryTreeNode<T>;
  value: T;
  meta: HashTable<any>;
  comparator: Comparator;

  constructor(value: T = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;

    this.meta = new HashTable<any>();

    this.comparator = new Comparator();
  }

  get leftHeight(): number {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  }

  get rightHeight(): number {
    if (!this.right) {
      return 0;
    }

    return this.right.height + 1;
  }

  get height(): number {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  get balanceFactor(): number {
    return this.leftHeight - this.rightHeight;
  }

  get uncle(): BinaryTreeNode<T> {
    // if has parent
    if (!this.parent) {
      return undefined;
    }

    // no grand-parent
    if (!this.parent.parent) {
      return undefined;
    }

    // if grand-parent node has two children
    if (!this.parent.parent.left || !this.parent.parent.right) {
      return undefined;
    }

    if (this.comparator.equal(this.parent, this.parent.parent.left)) {
      return this.parent.parent.right
    }

    return this.parent.parent.right;
  }

  setValue(value: T): BinaryTreeNode<T> {
    this.value = value;
    return this;
  }

  setLeft(node: BinaryTreeNode<T>): BinaryTreeNode<T> {
    // cut off old left node reference to parent
    // TODO: is this necessay?
    if (this.left) {
      this.left.parent = null;
    }

    this.left = node;
    if (node) {
      this.left.parent = this;
    }

    return this;
  }

  setRight(node: BinaryTreeNode<T>): BinaryTreeNode<T> {
    if (this.right) {
      this.right.parent = null;
    }

    this.right = node;

    if (node) {
      this.right.parent = this;
    }

    return this;
  }

  removeChild(node: BinaryTreeNode<T>): boolean {
    if (this.left && this.comparator.equal(this.left, node)) {
      this.left = null;
      return true;
    }

    if (this.right && this.comparator.equal(this.right, node)) {
      this.right = null;
      return true;
    }

    return false;
  }

  isLeaf(): boolean {
    return this && !this.left && !this.right;
  }

  replaceChild(oldNode: BinaryTreeNode<T>, newNode: BinaryTreeNode<T>): boolean {
    if (!oldNode) {
      return false;
    }

    if (this.left && this.comparator.equal(this.left, oldNode)) {
      this.left = newNode;
      return true;
    }

    if (this.right && this.comparator.equal(this.right, oldNode)) {
      this.right = newNode;
      return true;
    }

    return false;
  }

  static copyNode<T>(source: BinaryTreeNode<T>, target: BinaryTreeNode<T>): void {
    target.setValue(source.value);
    target.setLeft(source.left);
    target.setRight(source.right);
  }

  // 前序遍历
  traversePreOrder() {
    return this.traverse(['node', 'left', 'right']);
  }

  // 中序遍历
  traverseInOrder() {
    return this.traverse(['left', 'node', 'right']);
  }

  // 后序遍历
  traversePostOrder() {
    return this.traverse(['left', 'right', 'node']);
  }

  toString(): string {
    return this.traverseInOrder().toString();
  }

  // basic API
  insert(value: T): BinaryTreeNode<T> {
    throw new Error('please implement `insert` method!');
  }

  find(value: T): BinaryTreeNode<T> {
    throw new Error('please implement `find` method!');
  }

  remove(value: T): boolean {
    throw new Error('please implement `delete` method!');
  }

  contains(value: T): boolean {
    throw new Error('please implement `contains` method!');
  }

  findMin(): BinaryTreeNode<T> {
    throw new Error('please implement `findMin` method!');
  }

  /**
   * 前中后序遍历
   * 
   * @param order 
   */
  private traverse(order: string[]): T[] {
    let traverse: T[] = [];

    order.forEach(which => {
      if (which === 'node') {
        traverse.push(this.value);
      } else {
        if (this[which]) {
          traverse = traverse.concat(this[which].traverse(order));
        }
      }
    });

    return traverse;
  }

}