// O(n) time || O(1) space
function slowestKey(keyTimes) {
const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
let longestPressedKey = [alpha[keyTimes[0][0]], keyTimes[0][1]];
let previousTime = keyTimes[0][1];

for (let i = 1; i < keyTimes.length - 1; i++) {
    const keyTime = keyTimes[i][1];
    previousTime = Math.abs(keyTime - previousTime);
    if (previousTime > longestPressedKey[1]) {
        longestPressedTime = [alpha[keyTimes[i][0]], keyTime]
    }
}
  return longestPressedTime[0];
}

console.log(slowestKey([[0,2],[1,5],[2,11],[3,18]]))