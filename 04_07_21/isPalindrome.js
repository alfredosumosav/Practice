var isPalindrome = function(head) {
    // create a reversed linked list
    let currentNode = head;
    let previousNode = null;
    let nextNode = null;
    let newNode; // the reversed linked list head

    while (currentNode) {
    // create a new node
    newNode = new ListNode(currentNode.val);
    // point nextNode to next node
    nextNode = currentNode.next;
    // assign next of new node to previous node
    newNode.next = previousNode;
    // update previous node to current node
    previousNode = newNode;
    // update current node to nextNode 
    currentNode = nextNode;
    }
    
    // is reversed linked list equal to the original input?
    while (head) {
        // not equal
        if (head.val !== newNode.val) return false;
        newNode = newNode.next;
        head = head.next;
    }
    
    // equal
    return true;
};