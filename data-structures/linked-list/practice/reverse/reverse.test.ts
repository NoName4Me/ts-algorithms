import { expect } from 'chai';
import {reverse, reverseRecusive} from './reverse';
import LinkedList from '../../LinkedList';

describe('链表反转', function () {

  it('迭代', function () {
    let arr: number[] = [1, 5, 3, 4];
    let list = new LinkedList<number>();
    list.fromArray(arr);
    const originalStr = list.toString();
    let reversed = reverse(list.head);
    let toCheck = ''
    while(reversed) {
      toCheck = reversed.value + toCheck
      reversed = reversed.next
    }
    expect(toCheck).to.equal(originalStr);

  });
  
  it('递归', function() {
    let arr: number[] = [1, 5, 3, 4];
    let list = new LinkedList<number>();
    list.fromArray(arr);
    const originalStr = list.toString()
    let reversed = reverseRecusive(list.head);
    let toCheck = '';
    
    while (reversed) {
      toCheck = reversed.value + toCheck;
      reversed = reversed.next;
    }
    expect(toCheck).to.equal(originalStr);
  });
});