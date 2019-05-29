import LinkedListNode from "../../LinkedListNode";

export function itertiveSwap<T>(head: LinkedListNode<T>): LinkedListNode<T> {
  if (!head || !head.next) {
    return head;
  }

  let dummy = new LinkedListNode(head.value)
  dummy.next = head;
  let curr = dummy
  while (curr.next && curr.next.next) {
    let first = curr.next;
    let second = curr.next.next;
    curr.next = second;
    first.next = second.next;
    second.next = first;
    curr = curr.next.next
  }
  return dummy.next
}

export function recursiveSwap<T>(head: LinkedListNode<T>): LinkedListNode<T> {
  if (!head || !head.next) {
    return head;
  }

  let next = head.next;
  head.next = recursiveSwap(next.next)
  next.next = head;
  return next
}