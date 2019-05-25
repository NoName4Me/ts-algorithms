import Sort from "../Sort";
import { CallBack } from '../Sort';

export default class ShellSort<T> extends Sort<T> {
  constructor(originalCallbacks?: CallBack) {
    super(originalCallbacks);
  }

  sort<T>(originalArray: T[]): T[] {
    const N = originalArray.length;
    for (let gap = N / 2 | 0; gap > 0; gap = gap / 2 | 0) {
      // 从 gap 位置开始，对每一组数据进行插入排序
      for (let i = gap; i < N; i++) {
        let j = i - gap;
        let value = originalArray[i];
        while (j >= 0 && this.comparator.lessThan(value, originalArray[j])) {
          originalArray[j + gap] = originalArray[j];
          j -= gap;
        }
        originalArray[j + gap] = value;
      }
    }
    return originalArray;
  }
}

