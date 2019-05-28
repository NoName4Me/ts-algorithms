import { expect } from 'chai';
import { twoPointer, byArray } from './findMiddle';
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
describe('链表求中点', function() {
  it('数组方法', function() {
    let arr: number[] = [1, 5, 3, 4];
    let list = new LinkedList<number>();
    list.fromArray(arr);
    let middle = byArray(list.head);
    let toCheck = getStr(middle);
    expect(toCheck).to.equal('34');

    list = new LinkedList<number>();
    list.fromArray([1, 5, 3, 4, 7]);
    middle = byArray(list.head);
    toCheck = getStr(middle);
    expect(toCheck).to.equal('347');
  });

  it('双指针方法', function() {
    let arr: number[] = [1, 5, 3, 4];
    let list = new LinkedList<number>();
    list.fromArray(arr);
    let middle = twoPointer(list.head);
    let toCheck = getStr(middle);
    expect(toCheck).to.equal('34');


    list = new LinkedList<number>();
    list.fromArray([1, 5, 3, 4, 7]);
    middle = twoPointer(list.head);
    toCheck = getStr(middle);
    expect(toCheck).to.equal('347');
  });
});
