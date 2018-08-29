import { expect } from 'chai';
import LinkedList from './LinkedList';

describe('链表', function () {

  it('初始化', function () {
    let list = new LinkedList();
    expect(list.head).to.equal(null);
    expect(list.tail).to.equal(null);
    expect(list.toString()).to.equal('');
  });

  it('增加一个: 头部', function () {
    let list = new LinkedList<number>();
    list.prepend(1);
    expect(list.head.value).to.equal(1);
    expect(list.tail.value).to.equal(1);
    expect(list.toString()).to.equal('1');
  });

  it('增加一个: 尾部', function () {
    let list = new LinkedList<number>();
    list.append(2);
    expect(list.head.value).to.equal(2);
    expect(list.tail.value).to.equal(2);
    expect(list.toString()).to.equal('2');
  });

  it('链式增加', function () {
    let list = new LinkedList<number>();
    list.prepend(1).append(2);
    expect(list.head.value).to.equal(1);
    expect(list.tail.value).to.equal(2);
    expect(list.toString()).to.equal('12');
  });

  describe('删除', () => {
    it('任意删除', function () {
      let list = new LinkedList<number>();
      list.prepend(1).append(2).append(3).append(4);
      expect(list.remove(2).value).to.equal(2);
      expect(list.toString()).to.equal('134');
      expect(list.remove(1).value).to.equal(1);
      expect(list.toString()).to.equal('34');
    });
    it('删除头/尾', function () {
      let list = new LinkedList<number>();
      list.prepend(1).append(2).append(3).append(4);
      expect(list.removeHead().value).to.equal(1);
      expect(list.toString()).to.equal('234');
      list.removeTail();
      expect(list.toString()).to.equal('23');
    });
  })

  it('查找', function () {
    let list = new LinkedList<number>();
    list.prepend(1).append(2).append(3).append(4);
    expect(list.find(2).value).to.equal(2);
    expect(list.find(6)).to.equal(null);
  });

  it('数组创建/导出', function () {
    let arr: number[] = [1, 5, 3];
    let list = new LinkedList<number>();
    list.fromArray(arr);
    expect(list.toString()).to.equal('153');
    expect(list.toArray().map(item => item.value)).deep.equal([1, 5, 3]); // or `.members()`
  });
});