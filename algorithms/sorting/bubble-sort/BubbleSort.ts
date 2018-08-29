import Sort from "../Sort";
import { CallBack } from '../Sort'
export default class BubbleSort<T> extends Sort<T> {
  constructor(originalCallbacks?: CallBack) {
    super(originalCallbacks);
  }
  // 升序
  sort(originalArray: T[]): T[] {
    const N = originalArray.length;
    for (let i = 0; i < N; i++) {
      let flag = false; // 优化算法的标志量，当某次冒泡没有交换行为时，说明序列已经有序
      for (let j = 0; j < N - i - 1; j++) {
        if (this.comparator.lessThan(originalArray[j + 1], originalArray[j])) {
          let temp = originalArray[j + 1];
          originalArray[j + 1] = originalArray[j];
          originalArray[j] = temp;
          flag = true;
        }
      }

      if (!flag) break;
    }
    return originalArray;
  }
}