import LinkedList from '../linked-list/LinkedList'

const defaultHashTableSize = 32;
export default class HashTable<T> {
  keys: object;
  buckets: LinkedList<{ key: string, value: T }>[];

  constructor(hashTableSize = defaultHashTableSize) {
    type NodeType = { key: string, value: T };

    this.buckets = new Array<LinkedList<NodeType>>(hashTableSize).fill(null).map<LinkedList<NodeType>>(() => new LinkedList());
    this.keys = {};
  }

  hash(key: string): number {
    const hash: number = Array.from(key)
      .reduce<number>((hashCnt: number, keyChar: string) => (hashCnt + keyChar.charCodeAt(0)), 0);
    return hash % this.buckets.length;
  }

  set(key: string, value: T): void {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find(null, nodeValue => nodeValue.key === key);
    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  get(key: string): T {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find(null, nodeValue => nodeValue.key === key);
    return node ? node.value.value : undefined;
  }

  delete(key: string): T {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find(null, nodeValue => nodeValue.key === key);
    if (node) {
      
      let remmovedNode = bucketLinkedList.remove(node.value);
      return remmovedNode && remmovedNode['value']['value'];
    }
    return null;
  }

  has(key: string): boolean {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  getKeys(): string[] {
    return Object.keys(this.keys);
  }
}