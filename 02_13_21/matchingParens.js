/*
"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) 
they get confusing.";

Write a function that, given a sentence like the one above, along with the 
position of an opening parenthesis, finds the corresponding closing parenthesis.

Example: if the example string above is input with the number 10 (position of the 
first parenthesis), the output should be 79 (position of the last parenthesis).
*/

// O(n) time | O(1) space
function matchingParens(sentence, openingParenIndex) {
  // looping through the string, keeping a count of how many open parentheses we have
  let openNestedParens = 0;

  for (let position = openingParenIndex + 1; position < sentence.length; position++) {
    const char = sentence[position];

    if (char === '(') {
      openNestedParens++;
    } else if (char === ')') {
      if (openNestedParens === 0) {
        return position;
      }

      openNestedParens--;
    }
  }

  return("No closing parentheses found :(");
}

console.log(matchingParens('Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.', 10));
console.log(matchingParens('Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.', 28));