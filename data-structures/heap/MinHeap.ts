import Heap from './Heap';

export default class MinHeap<T> extends Heap<T>{
  pairIsInCorrectOrder(firstElement: T, secondElement: T): boolean {
    return this.compare.lessThanOrEqual(firstElement, secondElement);
  }
}