/*
  create a function to add 2 numbers.

  You are required to add very big numbers, in the order of 10^33 and still 
  return the exact value as a string

  example 1
  input:

  string1 = "100000000000000000000000000000002"
  string1 = "100000000000000000000000000000001"

  output:

  "200000000000000000000000000000003"

  example 2

  input:

  string1 = "3.14"
  string1 = "0.9"

  output:

  "4.04"
*/

var addNumbers = function (string1, string2) {
  let s1 = string1.split("");
  let s2 = string2.split("");
  let r = [];
  let acc = 0;

  // parte entera
  while (s1.length || s2.length) {
    let d1 = s1.length ? s1.pop() : 0;
    let d2 = s2.length ? s2.pop() : 0;

    let digitSum = Number(d1) + Number(d2) + acc;

    if (digitSum > 9) {
      digitSum = digitSum % 10;
      acc = 1;
    }

    r.unshift(digitSum);
  }

  if (acc === 1) {
    r = String(acc) + String(r.join(""));
  } else {
    r = String(r.join(""));
  }

  return r;

};

var addAllNumbers = function (string1, string2) {
  // parte entera
  let s1 = string1.split(".")[0] ? string1.split(".")[0].split("") : ["0"];
  let s2 = string2.split(".")[0] ? string2.split(".")[0].split("") : ["0"];

  // parte decimal
  let s3 = string1.split(".")[1] ? string1.split(".")[1].split("") : ["0"];
  let s4 = string2.split(".")[1] ? string2.split(".")[1].split("") : ["0"];
  let acc = 0;

  if (s3.length < s4.length) {
    let zeros = s4.length - s3.length;
    let a = new Array(zeros).fill(0);
    console.log(a);
    s3 = s3.concat(a);
  } else if (s3.length > s4.length) {
    let zeros = s3.length - s4.length;
    let a = new Array(zeros).fill("0");
    console.log(a);
    s4 = s4.concat(a);
  }

  let decimalSum = addNumbers(s3.join(""), s4.join(""));

  if (decimalSum.length > s3.length) {
    decimalSum = String(decimalSum / 10 ** s3.length).split(".")[1];
    acc = 1;
  }

  let intSum = addNumbers(s1.join(""), s2.join(""));

  if (acc === 1) {
    intSum = String(Number(intSum) + 1);
  }

  if (decimalSum.length > 1) {
    return intSum + "." + decimalSum;
  } else {
    return intSum;
  }

};

console.log(addAllNumbers("3.14", "0.9"));
console.log(addAllNumbers("8", "9"));
console.log(addAllNumbers("99", "99"));

console.log(
  addAllNumbers(
    "100000000000000000000000000000002",
    "100000000000000000000000000000001"
  )
); // 200000000000000000000000000000003
console.log(
  addAllNumbers(
    "100000000000000000000000000000002100000000000000000000000000000002",
    "100000000000000000000000000000001100000000000000000000000000000002"
  )
); // 200000000000000000000000000000003 