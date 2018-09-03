import { expect } from 'chai';
import DoublyLinkedList from './DoublyLinkedList';

describe('双向链表测试', function () {
  it('初始化', function () {
    let list = new DoublyLinkedList();

    expect(list.head).to.equal(null);
    expect(list.tail).to.equal(null);
  })

  it('新增', function () {
    let list = new DoublyLinkedList();
    list.addHead(1);
    expect(list.head.value).to.equal(1);
    list.addHead(2);
    expect(list.head.value).to.equal(2);
    list.addTail(3);
    expect(list.tail.value).to.equal(3);
    expect(list.toString()).to.equal('213');
  })

  it('查找', function () {
    let list = new DoublyLinkedList();
    list.addHead(1);
    list.addHead(2);
    list.addTail(3);
    let node = list.find(1);
    expect(node.value).to.equal(1);
    expect(node.next.value).to.equal(3);
    expect(node.previous.value).to.equal(2);
    expect(node.previous.previous).to.equal(null);
    expect(node.next.next).to.equal(null);
    node = list.find(5);
    expect(node).to.equal(null);
  })

  it('删除', function () {
    let list = new DoublyLinkedList();
    list.addHead(1);
    list.addHead(2);
    list.addTail(3);
    let node = list.remove(2);
    expect(node.previous).to.equal(null);
    expect(node.next.value).to.equal(1);
    node = list.remove(4);
    expect(node).to.equal(null);
  })
})
