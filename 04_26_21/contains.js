function contains(array, value) {
    // See if value appears in array

    let floorIndex = -1;
    let ceilingIndex = array.length;

    // If there isn't at least 1 index between floor and ceiling,
    // we've run out of guesses and the number must not be present
    while (floorIndex + 1 < ceilingIndex) {

      // Find the index ~halfway between the floor and ceiling
      // We have to round down, to avoid getting a "half index"
      const distance = ceilingIndex - floorIndex;
      const halfDistance = Math.floor(distance / 2);
      const guessIndex = floorIndex + halfDistance;

      const guessValue = array[guessIndex];

      if (guessValue === value) {
        return true;
      }

      if (guessValue > value) {

        // Target is to the left, so move ceiling to the left
        ceilingIndex = guessIndex;
      } else {

        // Target is to the right, so move floor to the right
        floorIndex = guessIndex;
      }
    }

    return false;
}

console.log(contains([], 1)); // false
console.log(contains([1], 1)); // true
console.log(contains([1], 2)); // false
console.log(contains([2, 4, 6], 4)); // true
console.log(contains([2, 4, 6], 5)); // false
console.log(contains([1,2,3,4,5,6,7,8,9,10], 8)); // true
console.log(contains([1,2,3,4,5,6,7,8,9,10], 0)); // false
console.log(contains([1,2,3,4,5,6,7,8,9,10], 1)); // true
console.log(contains([1,2,3,4,5,6,7,8,9,10], 10)); // true