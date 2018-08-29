import Heap from './Heap'

export default class MaxHeap<T> extends Heap<T> {
  pairIsInCorrectOrder(firstElement:T, secondElement:T) {
    return this.compare.greaterThanOrEqual(firstElement, secondElement);
  }
}