import Comparator from '../../utils/Comparator';

export type CallBack = {
  compareCallback: Function,
  visitingCallback: Function
}

export default class Sort<T> {
  callbacks: CallBack;
  comparator: Comparator;

  constructor(originalCallbacks?: CallBack) {
    this.callbacks = Sort.initSortingCallbacks(originalCallbacks);
    this.comparator = new Comparator(this.callbacks.compareCallback);
  }



  static initSortingCallbacks(originalCallbacks?: CallBack): CallBack {
    const callbacks: CallBack = originalCallbacks || {} as CallBack;
    const stubCallback = () => { };

    callbacks.compareCallback = callbacks.compareCallback || undefined;
    callbacks.visitingCallback = callbacks.visitingCallback || stubCallback;

    return callbacks;
  }

  sort(originalArray:T[]):T[] {
    throw new Error('sort method must be implemented');
  }
}
