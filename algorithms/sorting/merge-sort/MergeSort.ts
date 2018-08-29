import Sort, { CallBack } from "../Sort";

export default class MergeSort<T> extends Sort<T> {
  constructor(originalCallback: CallBack) {
    super(originalCallback);
  }

  sort<T>(originalArray: T[]): T[] {
    const len: number = originalArray.length;
    if (len < 2) {
      return originalArray;
    }
    const middle = Math.floor(len / 2);
    return this.merge(
      this.sort(originalArray.slice(0, middle)),
      this.sort(originalArray.slice(middle))
    );
  }

  private merge<T>(leftArr: T[], rightArr: T[]): T[] {
    const sortedArr: T[] = [];
    while (leftArr.length && rightArr.length) {
      sortedArr.push(
        this.comparator.lessThanOrEqual(leftArr[0], rightArr[0]) ? leftArr.shift() : rightArr.shift());
    }
    return sortedArr.concat(leftArr.concat(rightArr));
  }
}