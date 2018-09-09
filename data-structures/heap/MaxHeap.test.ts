import { expect } from 'chai';
import Heap from './Heap'
import MaxHeap from './MaxHeap'

describe('最大堆测试', function () {
  it('初始化', function () {
    const heap:Heap = new MaxHeap();
    expect(heap.peek()).to.be.null;
    expect(heap.isEmpty()).to.be.true;
  })

  it('add测试', function () {
    const heap: Heap = new MaxHeap();
    heap.add(1);
    expect(heap.peek()).to.equal(1);
    expect(heap.toString()).to.equal('1');

    heap.add(2);
    expect(heap.peek()).to.equal(2);
    expect(heap.toString()).to.equal('2,1');

    heap.add(5);
    expect(heap.peek()).to.equal(5);
    expect(heap.toString()).to.equal('5,1,2');

    heap.add(10);
    expect(heap.peek()).to.equal(10);
    expect(heap.toString()).to.equal('10,5,2,1');
  })

  it('poll测试', function () {
    const heap: Heap = new MaxHeap();
    heap.add(1);
    heap.add(2);
    heap.add(5);
    heap.add(10);
    expect(heap.poll()).to.equal(10);
    expect(heap.toString()).to.equal('5,1,2');
    expect(heap.poll()).to.equal(5);
    expect(heap.toString()).to.equal('2,1');
    expect(heap.poll()).to.equal(2);
    expect(heap.toString()).to.equal('1');
    expect(heap.poll()).to.equal(1);
    expect(heap.toString()).to.equal('');
  })

  it('remove测试', function () {
    const heap: Heap = new MaxHeap();
    heap.add(1);
    heap.add(2);
    heap.add(5);
    heap.add(10);
    expect(heap.remove(2).toString()).to.equal('10,5,1');
  })
  
  it('find测试', function () {
    const heap: Heap = new MaxHeap();
    heap.add(1);
    heap.add(2);
    heap.add(5);
    heap.add(10);
    expect(heap.find(2)).to.deep.equal([2]);
  })
})