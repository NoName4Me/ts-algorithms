import Sort, { CallBack } from "../Sort";
import QuickSort from "../quick-sort/QuickSort";

export default class BucketSort extends Sort<number> {
  constructor(callback?: CallBack) {
    super(callback);
  }

  sort(originalArray: number[], bucketNumber?: number): number[] {
    if (!bucketNumber) {
      return originalArray;
    }
    const max = Math.max(...originalArray);
    const min = Math.min(...originalArray);
    const bucketSize: number = Math.ceil((max - min) / bucketNumber);
    if (!bucketSize) {
      return originalArray;
    }

    const arr = new Array(bucketNumber).fill(null);

    for (let i = 0; i < originalArray.length; i++) {

      const index = Math.trunc((originalArray[i] - min) / bucketSize);
      if (!arr[index]) {
        arr[index] = []
      }
      arr[index].push(originalArray[i]);
    }

    return arr.reduce((preList, subList) => {
      if (!subList) { // some bucket is empty
        return preList;
      }
      return preList.concat(new QuickSort().sort<number>(subList));
    }, []);
  }
}