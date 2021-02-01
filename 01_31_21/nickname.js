/*
Write a function nickname(name) that takes in a name string and returns
a string representing their nickname. A nickname is the name up to the
second vowel repeated twice. See the examples.
*/

//O(n) time and O(1) space
function nickname(name) {
  var vowels = 'AEIOUaeiou'.split('');
  var vowelCount = 0;

  for (var i = 0; i < name.length; i += 1) {
    var char = name[i];

    if (vowels.indexOf(char) > -1) {
      vowelCount += 1;
      if (vowelCount === 2) {
        break;
      }
    }
  }

  var str = name.slice(0, i + 1).toUpperCase();
  return str + '-' + str;
}

console.log(nickname('manuel')); // => 'MANU-MANU'
console.log(nickname('pikachu')); // => 'PIKA-PIKA'
console.log(nickname('bootcamp')); // => 'BOO-BOO'
console.log(nickname('bob')); // => 'BOB-BOB'