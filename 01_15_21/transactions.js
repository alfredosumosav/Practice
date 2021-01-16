// Transaction logs
/*
A Company parses logs of online store user transactions/activity to flag fraudulent activity.

The log file is represented as an Array of arrays. The arrays consist of the following data:

[ <# of transactions>]

For example:

[345366 89921 45]

Note: the data is space delimited

So, the log data would look like:

[
[345366 89921 45],
[029323 38239 23]
...
]
Write a function to parse the log data to find distinct users that meet or cross a certain threshold.

The function will take in 2 inputs:
logData: Log data in form an array of arrays

threshold: threshold as an integer

Output:
It should be an array of userids that are sorted.

If same userid appears in the transaction as userid1 and userid2, it should count as one occurrence, not two.

Example:
Input:
logData:

[
[345366 89921 45],
[029323 38239 23],
[38239 345366 15],
[029323 38239 77],
[345366 38239 23],
[029323 345366 13],
[38239 38239 23]
...
]
threshold: 3

Output: [345366 , 38239, 029323]
Explanation:
Given the following counts of userids, there are only 3 userids that meet or exceed the threshold of 3.

345366 -4 , 38239 -5, 029323-3, 89921-1
*/
var transactions = function (logData, threshold) {
  let result = [];
  let hash = {};

  for (let i = 0; i < logData.length; i++) {
    let ele = logData[i][0].split(' ');
    let userid1 = ele[0];
    let userid2 = ele[1];

    // no estan guardados
    if (hash[userid1] === undefined) {
      hash[userid1] = 1;
    } else {
    // estan guardados
      hash[userid1] += 1;
    }

    // si son diferentes...
    if (userid1 !== userid2) {
      // no estan guardados
      if (hash[userid2] === undefined) {
        hash[userid2] = 1;
      } else {
      // estan guardados
        hash[userid2] += 1;
      }
    }

  }

  // solo los que tienen threshold o mas van pal array
  for (userid in hash) {
    // si tiene mas de threshold, va pal array
    if (hash[userid] >= threshold) {
      result.push(userid);
    }
  }

  return result.sort((a,b) => b-a);
}

let logData = [
  ['345366 89921 45'],
  ['029323 38239 23'],
  ['38239 345366 15'],
  ['029323 38239 77'],
  ['345366 38239 23'],
  ['029323 345366 13'],
  // ['89921 89921 23'],
  // ['89921 89921 23'],
  // ['89921 89921 23'],
];

let th = 3;

console.log(transactions(logData, th));