var sortColors = function (nums) {
  // tres constantes
  let red = 0;
  let white = 0;
  let blue = 0;

  // contar cuantos rojos, blancos y azules hay
  nums.forEach(num => {
    num === 0 ? red++ : num === 1 ? white++ : blue++;
  });

  // modifica el array, colocando los valores en orden (first 0s, then 1s and 2s)
  for (let i = 0; i < nums.length; i++) {
    if (red) {
      nums[i] = 0;
      red--;
      continue;
    }

    if (white) {
      nums[i] = 1;
      white--;
      continue;
    }

    if (blue) {
      nums[i] = 2;
      blue--;
      continue;
    }
  }
  
  return nums;
}

console.log(sortColors([0])); // [0]
console.log(sortColors([1])); // [1]
console.log(sortColors([2,0,1])); // [0,1,2]
console.log(sortColors([2,0,2,1,1,0])); // [0,0,1,1,2,2]

/*
0 red
1 white
2 blue
*/