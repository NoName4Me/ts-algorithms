import LinkedListNode from "../../LinkedListNode";

/**
 * 单链表反转 - 迭代方式
 * @param link 
 */
export function reverse<T>(head:LinkedListNode<T>):LinkedListNode<T> {
  let prev:LinkedListNode<T> = null;
  let curr = head;
  while(curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

/**
 * 单链表反转 - 递归方式
 * 
 * @param head 
 */
export function reverseRecusive<T>(head: LinkedListNode<T>): LinkedListNode<T> {
  if(head === null || head.next === null) return head;
  let p = reverseRecusive(head.next);
  head.next.next = head
  head.next = null
  return p;
}