function caesarCipherEncryptor(string, key) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    let oldIndex = alphabet.indexOf(letter);
    let newIndex = (oldIndex + key) % alphabet.length;
    result += alphabet[newIndex];
  }
  return result;
}
