/*
you are given a list of songs where the ith song has a duration of 
time[i] seconds.

Return the number of pairs of songs for which their total duration in seconds 
is divisible by 60. Formally, we want the number of indices i, j such that i < j
 with (time[i] + time[j]) % 60 == 0.
 

Example 1:

Input: time = [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60

Example 2:

Input: time = [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is 
divisible by 60.
*/

// Time and Space complexity.
// O(n^2) time and O(1) space, where n is the # of durations in the time array.
var musicPairs = function (time) {
  // need a counter to return # of pairs with total duration divisible by 60
  let numberOfPairsWithDurationDivisibleBy60 = 0;

  // find all possible unique pair of songs and for each pair of songs
  for (let i = 0; i < time.length; i++) {
    // duration of song A
    const songDurationA = time[i];

    for (let j = i + 1; j < time.length; j++) {
      // duration of song B
      const songDurationB = time[j];

      // if the total duration is divisible by 60, increase the counter by 1
      if ((songDurationA + songDurationB) % 60 === 0) {
        numberOfPairsWithDurationDivisibleBy60++;
      }
    }
  }

  // return the # of pairs with total duration divisible by 60
  return numberOfPairsWithDurationDivisibleBy60;
}

console.log(musicPairs([30, 20, 150, 100, 40])); // 3
console.log(musicPairs([60, 60, 60])); // 3