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