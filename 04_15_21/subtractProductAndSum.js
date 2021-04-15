// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer

// O(d) time and O(1) space, where d is the number of digits from the input number
var subtractProductAndSum = function (n) {
    
    let prod = 1;
    let sum = 0;
    
    while (n > 0) {
        prod = prod * (n % 10);
        sum = sum + (n % 10);
        n = Math.floor(n / 10);
    }
    
    return (prod - sum);
};