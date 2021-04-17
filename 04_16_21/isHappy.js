var isHappy = function (n) { // 2
  const seen = new Set();
  let sum = 0;

  while (n > 0) { //  2 > 0
    const remainder = n % 10; //     2,4,6,1,7,3,8,5,9,8,5,4,1,2,4,0,2,
    n = Math.floor(n / 10); //       0,0,1,0,3,0,5,0,8,0,14,1,0,4,0,2,0,
    sum = sum + (remainder ** 2); // 4,0,16,0,36,37,0,49,58,0,64,89,0,81,145,0,25,41,42,0,4,20,0,4


    if (n === 0) {

      if (seen.has(sum)) return sum === 1;
      
      seen.add(sum);
      n = sum; // 20
      sum = 0; // 0
    }
  }
};

console.log(isHappy(19)); // true
console.log(isHappy(2)); // false