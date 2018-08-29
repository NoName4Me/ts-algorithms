import Sort, { CallBack } from "../Sort";

export default class CountingSort extends Sort<number> {
  constructor(callback?: CallBack) {
    super(callback);
  }

  sort(originalArray: number[]): number[] {
    const counter: number[] = [];
    for (let i = 0; i < originalArray.length; i++) {
      const j = originalArray[i];
      counter[j] > 0 ? counter[j]++ : (counter[j] = 1)
    }

    const sortedArray = [];
    for (let i = 0; i < counter.length; i++) {
      while (counter[i]) {
        sortedArray.push(i);
        counter[i]--;
      }
    }
    return sortedArray;
  }

  sort2(originalArray: number[]): number[] {
    const counter: number[] = [];

    for (let i = 0; i < originalArray.length; i++) {
      const j = originalArray[i];
      counter[j] > 0 ? counter[j]++ : (counter[j] = 1)
    }
    let reducer = 0;
    for (let i = 0; i < counter.length; i++) {
      if (counter[i]) {
        reducer += counter[i];
        counter[i] = reducer;
      }
    }

    const sortedArray = [];
    for (let i = originalArray.length - 1; i >= 0; i--) {
      sortedArray[--counter[originalArray[i]]] = originalArray[i];
    }
    return sortedArray;
  }
}
