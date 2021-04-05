// https://leetcode.com/problems/intersection-of-two-linked-lists/

function ListNode(val = null) {
  this.value = val;
  this.next = null;
}

// time and space complexity analysis
// O(n) time and O(1) space, where n is length of the largest linked list
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
