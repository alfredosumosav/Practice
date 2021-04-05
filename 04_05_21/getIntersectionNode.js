// https://leetcode.com/problems/intersection-of-two-linked-lists/

function ListNode(val = null) {
  this.value = val;
  this.next = null;
}

var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  var curA = headA;
  var curB = headB;
  while (curA !== curB) {
    curA = curA === null ? headB : curA.next;
    curB = curB === null ? headA : curB.next;
  }
  return curA;
};
