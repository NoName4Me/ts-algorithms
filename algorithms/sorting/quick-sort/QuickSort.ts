import Sort, { CallBack } from "../Sort";

export default class QuickSort<T> extends Sort<T> {
  constructor(callbacks?:CallBack) {
    super(callbacks);
  }

  sort(originalArray:T[]):T[] {
    const arr:T[] = [...originalArray];
    if (arr.length < 2) {
      return arr;
    }

    const leftArr:T[] = [];
    const rightArr:T[] = [];

    let pivotItem:T = arr.pop();

    while(arr.length) {
      const currentItem:T = arr.pop();
      if (this.comparator.lessThan(currentItem, pivotItem)) {
        leftArr.push(currentItem);
      } else {
        rightArr.push(currentItem);
      }
    }

    return this.sort(leftArr).concat(pivotItem, this.sort(rightArr));
  }
}