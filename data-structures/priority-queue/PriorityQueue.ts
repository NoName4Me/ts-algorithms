import MinHeap from '../heap/MinHeap'
import Comparator from '../../utils/Comparator'

export default class PriorityQueue extends MinHeap {
  priorities: object;

  constructor() {
    super();
    this.priorities = {};
    this.compare = new Comparator(this.comparePriority.bind(this));
  }

  add(item: any, priority: number = 0): PriorityQueue {
    this.priorities[item] = priority;
    if (this.hasValue(item)) {
      this.changePriority(item, priority);
    } else {
      super.add(item);
    }

    return this;
  }

  remove(item, customFindingComparator: Comparator = new Comparator(this.compareValue)): PriorityQueue {
    super.remove(item, customFindingComparator);
    delete this.priorities[item];
    return this;
  }

  changePriority(item, priority): PriorityQueue {
    this.remove(item, new Comparator(this.compareValue));
    this.add(item, priority);
    return this;
  }

  findByValue(item: any): number[] {
    return this.find(item, new Comparator(this.compareValue));
  }

  hasValue(item): boolean {
    return this.findByValue(item).length > 0;
  }

  comparePriority(a, b): number {
    if (this.priorities[a] === this.priorities[b]) {
      return 0;
    }

    return this.priorities[a] < this.priorities[b] ? -1 : 1
  }

  compareValue(a, b): number {
    if (a === b) {
      return 0;
    }
    return a > b ? 1 : -1;
  }
}