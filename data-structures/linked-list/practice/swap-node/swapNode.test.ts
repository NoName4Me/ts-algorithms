import { expect } from 'chai';
import { itertiveSwap, recursiveSwap } from './swapNode';
import LinkedList from '../../LinkedList';
import LinkedListNode from '../../LinkedListNode';


function getStr<T>(middle: LinkedListNode<T>) {
  let str = '';
  while (middle) {
    str += middle.value;
    middle = middle.next;
  }
  return str;
}


describe('链表两两交换', function () {

  it('迭代', function () {
    let arr = [1, 5, 3, 4];
    let list = new LinkedList<number>();
    list.fromArray([1, 5, 3, 4]);

    expect(getStr(itertiveSwap(list.head))).to.equal('5143');

    arr = [1]
    list = new LinkedList<number>();
    list.fromArray(arr);

    expect(getStr(itertiveSwap(list.head))).to.equal('1');


    arr = [1,2]
    list = new LinkedList<number>();
    list.fromArray(arr);

    expect(getStr(itertiveSwap(list.head))).to.equal('21');

    arr = [1, 2, 3]
    list = new LinkedList<number>();
    list.fromArray(arr);

    expect(getStr(itertiveSwap(list.head))).to.equal('213');
  });

  it('递归', function () {
    let arr = [1, 5, 3, 4];
    let list = new LinkedList<number>();
    list.fromArray([1, 5, 3, 4]);

    expect(getStr(recursiveSwap(list.head))).to.equal('5143');

    arr = [1]
    list = new LinkedList<number>();
    list.fromArray(arr);

    expect(getStr(recursiveSwap(list.head))).to.equal('1');


    arr = [1, 2]
    list = new LinkedList<number>();
    list.fromArray(arr);

    expect(getStr(recursiveSwap(list.head))).to.equal('21');

    arr = [1, 2, 3]
    list = new LinkedList<number>();
    list.fromArray(arr);

    expect(getStr(recursiveSwap(list.head))).to.equal('213');
  });
});