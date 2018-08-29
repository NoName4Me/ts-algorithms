import Comparator from "../../utils/Comparator";

export default class JumpList<T> {
  private comparator: Comparator;
  constructor(arr: Jum<T>[], item: Node<T>, comparatorCallback?: Function) {
    this.comparator = new Comparator(comparatorCallback);
  }
  

  find(value:T):Node<T> {

    return;
  }

  insert(value: T): Node<T> {

    return;
  }

  remove(value: T): Node<T> {

    return;
  }
}
