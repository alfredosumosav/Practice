/*
Write a method same_char_collapse that takes in a string and returns
a collapsed version of the string. To collapse the string,
we repeatedly delete 2 adjacent characters that are the same until
there are no such adjacent characters. If there are multiple pairs
that can be collapsed, delete the leftmost pair. For example, we take the
following steps to collapse "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -> zy
*/

function sameCharCollapse(str) {
  var newStr = str;

  for (var i = 0; i < newStr.length - 1; i++) {
    var adj1 = newStr[i];
    var adj2 = newStr[i + 1];
    if (adj1 === adj2) {
      newStr = newStr.slice(0, i) + newStr.slice(i + 2);
      i = -1;
    }
  }

  return newStr;
}

console.log(sameCharCollapse("zzzxaaxy"));
console.log(sameCharCollapse("uqrssrqvtt"));
