// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// O(n) time and O(n) space, qhere n is the number of nodes in the linked list
var getDecimal = function (head) {
  // create an accumulator and an array to store digits
  const digits = [];
  let accumulator = 0;
  let pointer = head;

  // traverse the linked list and place each digit in the digits array
  // and place the digits such that the result is reversed
  while (pointer) {
    digits.unshift(pointer.val);
    pointer = pointer.next;
  }

  // for every 1, obtain the equivalent decimal and add it to our accumulator
  for (let i = 0; i < digits.length; i++) {

    // skip if binary is 0...
    if (digits[i] === 0) continue;

    // otherwise, binary is 1. so add the equivalent decimal to the accumulator
    accumulator = accumulator + Math.pow(2, i);
  }

  return accumulator;
}

// O(n) time and O(1) space, qhere n is the number of nodes in the linked list
// var getDecimal = function (head) {
//   let ans = 0;

//   while (head) {
//       ans = (ans << 1) | head.val;
//       head = head.next;
//   }

//   return ans;
// }

// 1 -> 0 -> 0 -> 1 -> 0 -> 0 -> 1 -> 1 -> 1 -> 0 -> 0 -> 0 -> 0 -> 0 -> 0
let head = pointer = new ListNode(1);
    pointer.next = new ListNode(0);
    pointer = pointer.next;
    pointer.next = new ListNode(0);
    pointer = pointer.next;
    pointer.next = new ListNode(1);
    pointer = pointer.next;
    pointer.next = new ListNode(0);
    pointer = pointer.next;
    pointer.next = new ListNode(0);
    pointer = pointer.next;
    pointer.next = new ListNode(1);
    pointer = pointer.next;
    pointer.next = new ListNode(1);
    pointer = pointer.next;
    pointer.next = new ListNode(1);
    pointer = pointer.next;
    pointer.next = new ListNode(0);
    pointer = pointer.next;
    pointer.next = new ListNode(0);
    pointer = pointer.next;
    pointer.next = new ListNode(0);
    pointer = pointer.next;
    pointer.next = new ListNode(0);
    pointer = pointer.next;
    pointer.next = new ListNode(0);
    pointer = pointer.next;
    pointer.next = new ListNode(0);

console.log(getDecimal(head)); // 18880