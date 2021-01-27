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
console.log(runLengthEnconding("aA")); // "1a1A"
console.log(runLengthEnconding("122333")); // 112233
console.log(runLengthEnconding("************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA")); // "9*3*7^6$7%6!9A9A2A"
console.log(runLengthEnconding("aAaAaaaaaAaaaAAAABbbbBBBB")); // "1a1A1a1A5a1A3a4A1B3b4B"
console.log(runLengthEnconding("                          ")); // "9 9 8 "
console.log(runLengthEnconding("1  222 333    444  555")); // "112 321 334 342 35"
console.log(runLengthEnconding("1A2BB3CCC4DDDD")); // "111A122B133C144D"
console.log(runLengthEnconding("........______=========AAAA   AAABBBB   BBB")); // "8.6_9=4A3 3A4B3 3B"
console.log(runLengthEnconding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")); // 9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a1a
console.log(runLengthEnconding("        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")); // "8 9a9a9a9a9a4a"
console.log(runLengthEnconding(" ")); // "1 "
console.log(runLengthEnconding("[(aaaaaaa,bbbbbbb,ccccc,dddddd)]")); // "1[1(7a1,7b1,5c1,6d1)1]"
console.log(runLengthEnconding(";;;;;;;;;;;;''''''''''''''''''''1233333332222211112222111s")); // "9;3;9'9'2'111273524142311s"
console.log(runLengthEnconding("AAAAAAAAAAAAABBCCCCDDDDDDDDDDD")); // "9A4A2B4C9D2D"
