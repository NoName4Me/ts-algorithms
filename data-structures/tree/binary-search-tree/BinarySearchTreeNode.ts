import BinaryTreeNode from "../BinaryTreeNode";
import Comparator from "../../../utils/Comparator";

export default class BinarySearchTreeNode<T> extends BinaryTreeNode<T>{
  comparatorFunc?: Function;
  constructor(value?: T, comparatorFunc: Function = null) {
    super(value);
    this.comparatorFunc = comparatorFunc;
    this.comparator = new Comparator(comparatorFunc);
  }

  insert(value: T): BinarySearchTreeNode<T> {
    if (this.comparator.equal(this.value, null)) {
      this.value = value;
      return this;
    }

    if (this.comparator.lessThan(value, this.value)) {
      if (this.left) {
        return this.left.insert(value);
      }

      let newNode = new BinarySearchTreeNode<T>(value, this.comparatorFunc);
      this.setLeft(newNode);
      return newNode;
    }

    if (this.comparator.greaterThan(value, this.value)) {
      if (this.right) {
        return this.right.insert(value);
      }

      let newNode = new BinarySearchTreeNode<T>(value, this.comparatorFunc);
      this.setRight(newNode);
      return newNode;
    }
    return this;
  }

  find(value: T): BinarySearchTreeNode<T> {
    if (this.comparator.lessThan(value, this.value) && this.left) {
      return this.left.find(value);
    }

    if (this.comparator.greaterThan(value, this.value) && this.right) {
      return this.right.find(value);
    }

    if (this.comparator.equal(this.value, value)) {
      return this;
    }

    return null;
  }

  /**
   * 三种情况
   *  1. 没有子节点，直接删除
   *  2. 只有一个子节点（左或者右），直接替换当前待删除节点
   *  3. 有两个子节点，用下一个更大子节点（右子树中最小节点，即最左节点）替换待删除节点
   * @param value 
   */
  remove(value: T): boolean {
    const removedNode = this.find(value);
    if (!removedNode) {
      return;
    }

    const { left, right, parent } = removedNode;
    // case 1
    if (removedNode.isLeaf()) {
      // removed node is root node
      if (!parent) {
        removedNode.setValue(null);
        return;
      }
      return parent.removeChild(removedNode);
    // case 3
    } else if (left && right) {
      const biggerNode = right.findMin();
      if(!this.comparator.equal(biggerNode, right)) {
        biggerNode.parent.left = null;
        parent.right.setValue(biggerNode.value);
        biggerNode.right = parent.right;
      } else {
        removedNode.setValue(biggerNode.value);
        removedNode.setRight(biggerNode.right);
      }
      // parent.right = biggerNode;
    } else {
      const childNode = left || right;
      if (parent) {
        parent.replaceChild(removedNode, childNode);
      } else { // root node
        BinaryTreeNode.copyNode(childNode, removedNode);
      }
    }
    console.log('>>>', removedNode.parent)
    removedNode.parent = null;
    return true;
  }

  contains(value: T): boolean {
    return !!this.find(value);
  }

  findMin(): BinarySearchTreeNode<T> {
    if (!this.left) {
      return this;
    }

    return this.left.findMin();
  }
}