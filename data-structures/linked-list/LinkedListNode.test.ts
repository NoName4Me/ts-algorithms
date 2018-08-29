import { expect } from 'chai';
import LinkedListNode from './LinkedListNode';

describe('测试链表节点', function () {

  it('创建', function () {
    let node = new LinkedListNode('hello');
    expect(node.value).to.equal('hello');
    node = new LinkedListNode(123);
    expect(node.value).to.equal(123);
    expect(node.toString()).to.equal('123');
    // expect(node.value).to.equal(123);
  });

});