import Sort from "../Sort";
import { CallBack } from '../Sort';

export default class ShellSort<T> extends Sort<T> {
  constructor(originalCallbacks?: CallBack) {
    super(originalCallbacks);
  }

  sort<T>(originalArray:T[]):T[] {
    return originalArray;
  }
}

