// https://leetcode.com/problems/min-stack/submissions/

class Node {
    constructor(val = null) {
        this.value = val;
        this.next = null;
    }
}

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.topEle = null;
    this.bottom = null;
    this.minValueStorage = [];
    this.maxValueStorage = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    const newNode = new Node(val);

    if (!this.minValueStorage.length || newNode.value <= this.minValueStorage[this.minValueStorage.length - 1].value) this.minValueStorage.push(newNode);
    if (!this.maxValueStorage.length || newNode.value >= this.maxValueStorage[this.maxValueStorage.length - 1].value) this.maxValueStorage.push(newNode);
    
    if (!this.topEle) {
        this.topEle = newNode;
        this.bottom = newNode;
    } else {
        const temp = this.topEle;
        this.topEle = newNode;
        this.topEle.next = temp;
    }
    return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (!this.topEle) return null;
    
    if (this.topEle.value === this.minValueStorage[this.minValueStorage.length - 1].value) this.minValueStorage.pop();
    if (this.topEle.value === this.maxValueStorage[this.maxValueStorage.length - 1].value) this.maxValueStorage.pop();
    
    const temp = this.topEle;
    if (this.topEle === this.bottom) {
        this.bottom = null;
    }
    this.topEle = this.topEle.next;
    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.topEle.value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minValueStorage[this.minValueStorage.length - 1].value || null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */