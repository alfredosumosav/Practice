// https://leetcode.com/problems/self-dividing-numbers/

// O(n) time and O(n) space, where n is the difference between the left and right bound
var selfDividingNumbers = function(left, right) {
    const selfDividingNums = [];
    
    // for each number in the range...
    for (let number = left; number <= right; number++) {
        const digits = String(number).split('');
        
        // do all digits fulfill conditions? 
        const selfDividing = digits.every(digit => digit !== '0' && number % Number(digit) === 0 ? true : false);
        
        // store the self-dividing numbers
        if (selfDividing) selfDividingNums.push(number);
    }
    
    return selfDividingNums;
};