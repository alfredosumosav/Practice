// https://leetcode.com/problems/palindrome-linked-list/discuss/1137027/JS-Python-Java-C%2B%2B-or-Easy-Floyd's-%2B-Reversal-Solution-w-Explanation

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

// Time and space complexity analysis
// O(n) time and O(1) space, where n is the total number of nodes of the linked list
var isPalindrome = function (head) {
  let slow = head, fast = head, prev, temp
  
  // point fast pointer to the end of the list
  while (fast && fast.next) {
    slow = slow.next, fast = fast.next.next
    prev = slow, slow = slow.next, prev.next = null
  }
  
  // reverse last half of the linked list input
  while (slow){
      temp = slow.next, slow.next = prev, prev = slow, slow = temp
      fast = head, slow = prev
  }

  // compare each node from the edge of the linked list to the middle
  while (slow) {
      // if 2 nodes disagree, it is not a palindrome
      if (fast.val !== slow.val) return false
      else fast = fast.next, slow = slow.next
  }

  // otherwise, it is a palindrome linked list
  return true
};