/*------------------------------------------------------------------------------
// vigenereCipher
//
// Caesar's cipher takes a word and encrypts it by offsetting each letter in
// the word by a fixed number, the key. For a key of 3, for example:
// a -> d, p -> s, and y -> b
//
// Vigenere's Cipher is a Caesar cipher, but instead of a single key, a sequence
// of keys is used. For example, if we encrypt "bananasinpajamas" with the
// key sequence [1, 2, 3], the result would be "ccqbpdtkqqcmbodt":
//
// Word:   b a n a n a s i n p a j a m a s
// Keys:   1 2 3 1 2 3 1 2 3 1 2 3 1 2 3 1
// Cipher: c c q b p d t k q q c m b o d t
//
// Write a funcition `vigenereCipher(string, keySequence, alphabet)` that takes a
// string and a key-sequence, returning the encrypted word.
//
// We're giving you the alphabet as an array if you need it:
//
// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
------------------------------------------------------------------------------*/

function vigenereCipher(string, keySequence, alphabet) {
  var ans = "";

  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    var oldIndex = alphabet.indexOf(char); // in alphabet
    var offset = keySequence[i % keySequence.length];
    var newIndex = oldIndex + offset; // in alphabet
    var newChar = alphabet[newIndex % alphabet.length];
    ans += newChar;
  }

  return ans;
}

var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

console.log(vigenereCipher("toerrishuman", [1], alphabet)); //  => "upfssjtivnbo"
console.log(vigenereCipher("toerrishuman", [1, 2], alphabet)); //  => "uqftsktjvobp"
console.log(vigenereCipher("toerrishuman", [1, 2, 3], alphabet)); //  => "uqhstltjxncq"