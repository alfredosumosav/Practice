var formatStr = function (str) {
  // if it has 10 or more characters
  if (str.length > 9) {
    // split str in 2 parts (first 9 chars and the remaining)
    let second = str.slice(9);

    // format the first and second part, then return back the result
    return `9${str[0]}` + formatStr(second);
  } else {
    // return # of times it is repeated followed by the character
    return `${str.length}${str[0]}`;
  }
};

var runLengthEnconding = function (string) {
  let encoded = "";
  let currMatch = "";

  // loop through the string
  for (let i = 0; i < string.length; i++) {
    // for each unique group of characters, format it, and add it to encoded
    let char = string[i];
    let nextChar = string[i + 1];
    currMatch += char;

    // if a different characters is next,
    if (char !== nextChar) {
      // format the current group of characters and add it to encoded
      encoded = encoded + formatStr(currMatch);
      // reset the current group
      currMatch = "";
    }
  }

  // the encoded result
  return encoded;
};

console.log(runLengthEnconding("AAAAABCCCC")); // "5A1B4C"
console.log(runLengthEnconding("AAAAAAAAAAAAABBCCCCDD")); // "9A4A2B4C2D"
