import Sort from "../Sort";
import { CallBack } from '../Sort'
export default class SelectionSort<T> extends Sort<T> {
  constructor(originalCallbacks?: CallBack) {
    super(originalCallbacks);
  }
  // 升序
  sort<T>(originalArray: T[]): T[] {
    const N = originalArray.length;
    for (let i = 0; i < N; i++) {
      // 找最小元素
      let minIdx = i;
      for (let j = i; j < N - 1; j++) {
        if (this.comparator.lessThan(originalArray[j + 1], originalArray[minIdx])) {
          minIdx = j + 1;
        }
      }
      // 交换排序部分下一个元素和最小元素
      let minValue = originalArray[minIdx];
      originalArray[minIdx] = originalArray[i]
      originalArray[i] = minValue;
    }
    return originalArray;
  }
}