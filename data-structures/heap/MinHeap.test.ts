import { expect } from 'chai';
import Heap from './Heap'
import MinHeap from './MinHeap'

describe('最小堆测试', function () {
  it('初始化', function () {
    const heap: Heap<number> = new MinHeap<number>();
    expect(heap.peek()).to.be.null;
    expect(heap.isEmpty()).to.be.true;
  })

  it('add测试', function () {
    const heap: Heap<number> = new MinHeap<number>();
    heap.add(1);
    expect(heap.peek()).to.equal(1);
    expect(heap.toString()).to.equal('1');

    heap.add(2);
    expect(heap.peek()).to.equal(1);
    expect(heap.toString()).to.equal('1,2');

    heap.add(5);
    expect(heap.peek()).to.equal(1);
    expect(heap.toString()).to.equal('1,2,5');

    heap.add(10);
    expect(heap.peek()).to.equal(1);
    expect(heap.toString()).to.equal('1,2,5,10');
  })

  it('poll测试', function () {
    const heap: Heap<number> = new MinHeap<number>();
    heap.add(1);
    heap.add(2);
    heap.add(5);
    heap.add(10);
    expect(heap.poll()).to.equal(1);
    expect(heap.toString()).to.equal('2,10,5');
    expect(heap.poll()).to.equal(2);
    expect(heap.toString()).to.equal('5,10');
    expect(heap.poll()).to.equal(5);
    expect(heap.toString()).to.equal('10');
    expect(heap.poll()).to.equal(10);
    expect(heap.toString()).to.equal('');
  })

  it('remove测试', function () {
    const heap: Heap<number> = new MinHeap<number>();
    heap.add(1);
    heap.add(2);
    heap.add(5);
    heap.add(10);
    expect(heap.remove(2).toString()).to.equal('1,10,5');
  })

  it('find测试', function () {
    const heap: Heap<number> = new MinHeap<number>();
    heap.add(1);
    heap.add(2);
    heap.add(5);
    heap.add(10);
    expect(heap.find(2)).to.deep.equal([1]);
  })
})