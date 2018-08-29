import { expect } from 'chai';
import LinkedListNode from './LinkedListNode';

describe('测试链表节点', function () {
  it('创建', function () {
    let node1 = new LinkedListNode<string>('hello');
    expect(node1.value).to.equal('hello');
    let node2 = new LinkedListNode<number>(123);
    expect(node2.value).to.equal(123);
    expect(node2.toString()).to.equal('123');
  });
});