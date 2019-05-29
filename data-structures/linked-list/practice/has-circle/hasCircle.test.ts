import { expect } from 'chai';
import { hasCircle } from './hasCircle';
import LinkedList from '../../LinkedList';

describe('链表是否有环', function () {

  it('有环', function () {
    let arr: number[] = [1, 5, 3, 4];
    let list = new LinkedList<number>();
    list.fromArray(arr);
    list.head.next.next.next.next = list.head.next.next

    expect(hasCircle(list.head)).to.equal(true);
  });

  it('无环', function () {
    let arr: number[] = [1, 5, 3, 4];
    let list = new LinkedList<number>();
    list.fromArray(arr);
    
    expect(hasCircle(list.head)).to.equal(false);
  });
});