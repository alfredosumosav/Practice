class ListNode {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) return null;

  let merged = null;
  let head = null;

  while (l1 || l2) {
    let v1 = l1 ? l1.val : Infinity;
    let v2 = l2 ? l2.val : Infinity;

    let next;

    if (v1 <= v2) {
      next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      next = new ListNode(l2.val);
      l2 = l2.next;
    }

    if (!merged) {
      merged = head = new ListNode(next.val);
      continue;
    }

    merged.next = next;
    merged = merged.next;
  }

  return head;
};

let n0 = new ListNode(1);
let n1 = new ListNode(2);
let n2 = new ListNode(4);

let n3 = new ListNode(1);
let n4 = new ListNode(3);
let n5 = new ListNode(4);

n0.next = n1;
n1.next = n2;
n3.next = n4;
n4.next = n5;

console.log(mergeTwoLists(n0, n3)); // -> [1,1,2,3,4]
console.log(mergeTwoLists(null, null)); // -> []
console.log(mergeTwoLists(null, n3)); // [1,3,4]