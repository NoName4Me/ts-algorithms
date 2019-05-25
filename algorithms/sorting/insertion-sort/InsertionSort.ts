import Sort, { CallBack } from "../Sort";

export default class InsertionSort<T> extends Sort<T>{
  constructor(originalCallbacks?: CallBack) {
    super(originalCallbacks);
  }

  sort<T>(originalArray: T[]): T[] {
    for (let i = 1; i < originalArray.length; i++) {
      const value: T = originalArray[i];
      let j = i - 1;
      for (; j >= 0 && this.comparator.lessThan(value, originalArray[j]); j--) {
        originalArray[j + 1] = originalArray[j];
      }
      originalArray[j + 1] = value;
    }
    return originalArray;
  }
}