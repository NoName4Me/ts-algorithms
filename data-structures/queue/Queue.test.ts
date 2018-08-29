import Queue from './Queue'

import { expect } from 'chai';

describe('队列测试', function() {
  it('初始化', function() {
    let queue = new Queue();
    expect(queue.isEmpty()).to.equal(true);
    expect(queue.peek()).to.equal(null);
    expect(queue.dequeue()).to.equal(null);
  })

  it('入队出队', function () {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue('*');
    queue.enqueue(2);
    expect(queue.toString()).to.equal('1*2');
    expect(queue.isEmpty()).to.equal(false);
    expect(queue.dequeue()).to.equal(1);
    expect(queue.peek()).to.equal('*');
  })
})