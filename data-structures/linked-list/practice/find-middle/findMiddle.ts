import LinkedListNode from "../../LinkedListNode";
import fastPowering from "../../../../algorithms/math/fast-powering/fastPowering";

export function byArray<T>(head:LinkedListNode<T>):LinkedListNode<T> {
  let A = [head];
  while(A[A.length - 1].next) {
    A.push(A[A.length - 1].next);
  }
  return A[A.length / 2 | 0];
}

export function twoPointer<T>(head: LinkedListNode<T>): LinkedListNode<T> {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}