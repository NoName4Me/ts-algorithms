import LinkedList from "../LinkedList";

interface NodeValueType { key: string, value: string }
const compareFunc = (a: NodeValueType, b: NodeValueType) => {
  return a.key === b.key ? 0 : 1;
}
export default class LRU {
  capacity: number;
  counter: number = 0;
  list: LinkedList<NodeValueType>;
  constructor(n: number, comparatorFunc: Function = compareFunc) {
    this.capacity = n;
    this.list = new LinkedList<NodeValueType>(comparatorFunc);
  }

  get(key: string): string {
    const node = { key, value: null };
    const removedNode = this.list.remove(node);
    if (removedNode) {
      this.list.prepend(removedNode.value);
      return removedNode.value.value;
    }

    return undefined;
  }

  set(key: string, value: string): number {
    const node = { key, value };
    
    if (this.counter === this.capacity) {
      this.list.removeTail();
    }

    this.list.prepend(node);
    this.counter++;

    return this.counter;
  }
}