import Comparator from '../../utils/Comparator'

export default class Heap {
  heapContainer: any[];
  compare: Comparator;

  constructor(comparatorFunction?: Function) {
    if (new.target === Heap) {
      throw new TypeError('Cannot construct Heap instance directly')
    }

    this.heapContainer = [];
    this.compare = new Comparator(comparatorFunction);
  }

  getLeftChildIndex(parentIndex: number): number {
    return (2 * parentIndex) + 1;
  }

  getRightChildIndex(parentIndex: number): number {
    return (2 * parentIndex) + 2;
  }

  getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(childIndex: number): boolean {
    return this.getParentIndex(childIndex) >= 0;
  }

  hasLeftChild(parentIndex: number): boolean {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  hasRightChild(parentIndex: number): boolean {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  leftChild(parentIndex: number) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex: number) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  parent(childIndex: number): any {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  swap(indexOne: number, indexTwo: number): void {
    const temp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = temp;
  }

  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }
    return this.heapContainer[0];
  }

  poll(): any {
    if (this.heapContainer.length === 0) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];
    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();
    return item;
  }

  add(item: any): Heap {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }

  remove(item: any, comparator = this.compare): Heap {
    const numberOfItemsToRemove = this.find(item, comparator).length;

    for (let i = 0; i < numberOfItemsToRemove; i++) {
      // 每一次删除都更新了树信息，所以需要重新查找节点索引
      const indexToRemove = this.find(item, comparator).pop();

      if (indexToRemove === (this.heapContainer.length - 1)) {
        this.heapContainer.pop();
      } else {
        this.heapContainer[indexToRemove] = this.heapContainer.pop();

        const parentItem = this.parent(indexToRemove);
        if (this.hasLeftChild(indexToRemove) && !parentItem || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove])) {
          this.heapifyDown(indexToRemove);
        } else {
          this.heapifyUp(indexToRemove);
        }
      }
    }
    return this;
  }

  find(item: any, comparator: Comparator = this.compare): number[] {
    const foundItemIndices = [];
    for (let i = 0; i < this.heapContainer.length; i++) {
      if (comparator.equal(item, this.heapContainer[i])) {
        foundItemIndices.push(i);
      }
    }

    return foundItemIndices;
  }

  isEmpty(): boolean {
    return !this.heapContainer.length;
  }

  toString(): string {
    return this.heapContainer.toString();
  }

  heapifyUp(startIndex: number = this.heapContainer.length - 1): void {
    let currentIndex = startIndex;

    while (this.hasParent(currentIndex) && !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  heapifyDown(startIndex: number = 0) {
    let currentIndex = startIndex;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (this.hasRightChild(currentIndex) && this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (this.pairIsInCorrectOrder(this.heapContainer[currentIndex], this.heapContainer[nextIndex])) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  /**
   * 检验两个堆元素是否在正确的顺序
   * 对「最大堆」而言，第 1 个元素应该小于等于第 2 个
   * 对「最小堆」而言，第 1 个元素应该大于等于第 2 个
   * @param firstElement 
   * @param secondElement 
   */
  pairIsInCorrectOrder(firstElement, secondElement) {
    throw new Error(`You have to implement heap pair comparision method for ${firstElement} and ${secondElement} values.`);
  }
}