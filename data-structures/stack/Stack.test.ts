import Stack from './Stack'

import { expect } from 'chai';

describe('队列测试', function() {
  it('初始化', function() {
    let stack = new Stack();
    expect(stack.isEmpty()).to.equal(true);
    expect(stack.peek()).to.equal(null);
    expect(stack.pop()).to.equal(null);
  })

  it('出栈入栈', function () {
    let stack = new Stack();
    stack.push(1);
    stack.push('*');
    stack.push(2);
    expect(stack.toString()).to.equal('1*2');
    expect(stack.isEmpty()).to.equal(false);
    expect(stack.pop()).to.equal(2);
    expect(stack.peek()).to.equal('*');
  })
})