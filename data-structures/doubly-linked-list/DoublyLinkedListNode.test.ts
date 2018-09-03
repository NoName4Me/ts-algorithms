import { expect } from 'chai';
import DoublyLinkedListNode from './DoublyLinkedListNode';

describe('双向链表节点测试', function () {
  it('初始化', function () {
    let node = new DoublyLinkedListNode(12);
    expect(node.toString()).to.equal('12');
  })
})
