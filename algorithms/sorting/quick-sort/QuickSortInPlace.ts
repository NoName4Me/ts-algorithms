import Sort, { CallBack } from "../Sort";

export default class QuickSort<T> extends Sort<T> {
  constructor(callbacks: CallBack) {
    super(callbacks);
  }

  sort(originalArray: T[]): T[] {
    return this.quickSort(originalArray, 0, originalArray.length - 1);
  }

  private quickSort(arr: T[], start, end) {
    if (start > end) {
      return arr;
    }
    const pivot = this.partion(arr, start, end);
    this.quickSort(arr, start, pivot);
    this.quickSort(arr, pivot + 1, end);
  }

  private partion(arr: T[], start, end): number {
    let pivotItem: T = arr[end];
    let pivot: number = start;
    for (let j = pivot; j < end - 1; j++) {
      if (this.comparator.lessThan(arr[j], pivotItem)) {
        let temp: T = arr[j];
        arr[j] = arr[pivot];
        arr[pivot] = temp;
        pivot++;
      }
    }
    arr[end] = arr[pivot];
    arr[pivot] = pivotItem;

    return pivot;
  }

}