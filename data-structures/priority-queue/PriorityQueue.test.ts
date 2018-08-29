import { expect } from 'chai'
import PriorityQueue from './PriorityQueue'

describe('权重树', function () {
  it('初始化', function () {
    const pq = new PriorityQueue();
    expect(pq.toString()).to.equal('');
  })

  it('add 测试', function () {
    const pq = new PriorityQueue();
    pq.add(10, 1)
    expect(pq.peek()).to.equal(10);
    pq.add(5, 2)
    expect(pq.peek()).to.equal(10);
    pq.add(100, 0)
    expect(pq.peek()).to.equal(100);
  })

  it('poll 测试', function () {
    const pq = new PriorityQueue();
    pq.add(10, 1);
    pq.add(5, 2);
    pq.add(100, 0);
    pq.add(200, 0);
    expect(pq.toString()).to.equal('100,200,10,5');
    expect(pq.poll()).to.equal(100);
    expect(pq.poll()).to.equal(200);
    expect(pq.poll()).to.equal(10);
    expect(pq.poll()).to.equal(5);
  })

  it('改变优先级测试', function () {
    const pq = new PriorityQueue();
    pq.add(10, 1);
    pq.add(5, 2);
    pq.add(100, 0);
    pq.add(200, 0);
    pq.changePriority(100,10);
    pq.changePriority(200, 1);
    expect(pq.poll()).to.equal(10);
    expect(pq.poll()).to.equal(200);
    expect(pq.poll()).to.equal(5);
    expect(pq.poll()).to.equal(100);
  })

  it('删除测试', function () {
    const pq = new PriorityQueue();
    pq.add(10, 1);
    pq.add(5, 2);
    pq.add(100, 0);
    pq.add(200, 0);
    expect(pq.toString()).to.equal('100,200,10,5');
    pq.add(200, 3);
    expect(pq.toString()).to.equal('100,5,10,200');
    pq.remove(10);
    expect(pq.hasValue(10)).to.be.false;
  })
})