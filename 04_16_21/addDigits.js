// https://leetcode.com/problems/add-digits/submissions/

// O(d) time and O(1) space, where d is the number of digits from the input number
function addDigits(num) {
  let sum = 0;
  
  while (num > 0 || sum > 9 ? [num, sum] = [sum, num] : false) {
      sum = sum + (num % 10);
      num = Math.floor(num / 10);
  }
  
  return sum;
}

// console.log(addDigits(38)); // 2
// console.log(addDigits(0)); // 0