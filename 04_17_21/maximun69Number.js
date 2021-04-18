// https://leetcode.com/problems/maximum-69-number

// O(n) time and O(n) space
var maximum69Number = function (num) {
    let arrNum = String(num).split('').map(s => Number(s));
    
    const i = arrNum.indexOf(6);
    if (i === -1) return arrNum.join('');
    
    arrNum[i] = 9;
    return arrNum.join('');
};