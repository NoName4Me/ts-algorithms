export default class StackOnArray<T>{
  list: T[];
  pointer: number;
  capacity: number;
  constructor(n: number = 8) {
    this.list = [];
    this.capacity = n;
    this.pointer = -1;
  }

  pop(): T {
    if (this.pointer === -1) {
      return null;
    }

    return this.list[this.pointer--];
  }

  push(value: T): number {
    if (this.pointer === this.capacity - 1) {
      // 2x capacity, no need in javascript
      this.capacity *= 2;
    }
    this.list[++this.pointer] = value;
    return this.pointer;
  }

  toString(): string {
    let result = [];
    for (let i = 0; i <= this.pointer; i++) {
      result.push(this.list[i]);
    }
    return result.join(',');
  }

  empty(): void {
    this.list.splice(0, this.pointer + 1); // 可以只设置 pointer 而不操作数据
    this.pointer = -1;
  }
}