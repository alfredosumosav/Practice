var singleNumber = function(nums) {
  let numbersAlreadySeen = new Set();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    
    if (numbersAlreadySeen.has(num)) {
      numbersAlreadySeen.delete(num);
    } else {
      numbersAlreadySeen.add(num);
    }
  }
  
  return numbersAlreadySeen.values().next().value;
};

let arr1 = [2, 2, 1];
let arr2 = [4, 1, 2, 1, 2];
let arr3 = [1];

console.log(singleNumber(arr1));
console.log(singleNumber(arr2));
console.log(singleNumber(arr3));