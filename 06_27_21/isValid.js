function isValid(code) {

  // object with brackets where openings match closers
  const brackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  // stack containing the openers found so far
  const openersFoundSoFar = [];

  for (let i = 0; i < code.length; i++) {
    const char = code[i];

    // if a character is an opening bracket, then store it in the openersFoundSoFar stack
    if (char === '{' || char === '[' || char === '(') openersFoundSoFar.push(char);

    // if a character is a closing bracket,
    if (char === '}' || char === ']' || char === ')') {
      const lastOpenerBracket = openersFoundSoFar[openersFoundSoFar.length - 1];
      const matchingCloserBracket = brackets[lastOpenerBracket];

      // ... and it doesn't match the last opening bracket, return false
      if (char !== matchingCloserBracket) return false;

      // ... otherwise it matches with the latest opening bracket, so remove the opening bracket
      openersFoundSoFar.pop();
    }
  }

  return openersFoundSoFar.length === 0 ? true : false;
}

console.log(isValid("()")); // true
console.log(isValid('([]{[]})[]{{}()}')); // true
console.log(isValid('([][]}')); // false
console.log(isValid('[[]()')); // false
console.log(isValid('[[]]())')); // false
console.log(isValid("")); // true