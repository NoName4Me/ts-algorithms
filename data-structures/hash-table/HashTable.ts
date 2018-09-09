import LinkedList from '../linked-list/LinkedList'

const defaultHashTableSize = 32

export default class HashTable {
  keys: object;
  buckets: LinkedList[];

  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = new Array<LinkedList>(hashTableSize);
    this.buckets.map<LinkedList>(() => new LinkedList());
    this.keys = {};
  }

  hash(key: string): number {
    const hash: number = Array.from(key).reduce<number>((hashCnt: number, keyChar: string) => (hashCnt + keyChar.charCodeAt(0)), 0);
    return hash % this.buckets.length;
  }

  set(key, value): void {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find(null, nodeValue => nodeValue.key === key);
    if (!node) {
      bucketLinkedList.addTail({ key, value });
    } else {
      node.value.value = value;
    }
  }

  get(key): any {
    const bucketLinkedList = this.buckets[key];
    const node = bucketLinkedList.find(null, nodeValue => nodeValue.key === key);
    return node ? node.value.value : undefined;
  }

  delete(key): any {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find(null, nodeValue => nodeValue.key === key);
    if (node) {
      return bucketLinkedList.remove(node.value) && bucketLinkedList.remove(node.value)['value'];
    }
    return null;
  }

  has(key): boolean {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  getKeys(): any[] {
    return Object.keys(this.keys);
  }
}