import { expect } from 'chai';
import StackOnArray from './StackOnArray';
import Stack from '../Stack';

describe('数组栈测试', () => {
  it('初始化', () => {
    const stack = new StackOnArray(4);
    expect(stack.pointer).to.equal(-1);
    expect(stack.capacity).to.equal(4);
    expect(stack.toString()).deep.equal('');
  });

  it('入栈出栈', () => {
    const stack = new StackOnArray<string>(4);
    stack.push('a');
    stack.push('b');
    stack.push('d');
    expect(stack.push('c')).equal(3);
    expect(stack.pointer).to.equal(3);
    expect(stack.capacity).to.equal(4);
    expect(stack.pop()).to.equal('c');
    expect(stack.pointer).equal(2);
    expect(stack.toString()).deep.equal('a,b,d');
    stack.push('e');
    stack.push('f');
    expect(stack.capacity).to.equal(8);
    expect(stack.pointer).to.equal(4);
  });
});

describe('链表栈测试', () => {
  it('初始化', () => {
    const stack = new Stack();
    expect(stack.toString()).deep.equal('');
  });

  it('入栈出栈', () => {
    const stack = new Stack<string>();
    stack.push('a');
    stack.push('b');
    stack.push('d');
    stack.push('c');
    expect(stack.pop()).to.equal('c');
    expect(stack.length).equal(3);
    expect(stack.toString()).deep.equal('a,b,d');
    stack.push('e');
    stack.push('f');
    expect(stack.length).to.equal(5);
    expect(stack.toArray()).deep.equal(['a', 'b', 'd', 'e', 'f'].reverse());
  });
});