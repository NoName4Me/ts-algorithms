import {expect} from 'chai';
import Heap from './Heap'

describe('堆测试', function() {
  it('初始化', function() {
    const instantiateHeap = () => {
      const heap:Heap<number> = new Heap<number>();
      heap.add(5);
    };
    expect(instantiateHeap).throw
  })
})