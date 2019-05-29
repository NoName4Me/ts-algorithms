import LinkedListNode from "../../LinkedListNode";

export function hasCircle<T>(head:LinkedListNode<T>):boolean {
  if(!head || !head.next) return false

  let fast = head.next;
  let slow = head;
  while(fast && fast.next) {
    if(slow === fast) {
      return true
    }
    fast = fast.next.next
    slow = slow.next
  }
  return false
}