/*
  Amazon is running a promotion in which customers receive prizes for purchasing a
  secret combination of fruits.The combination will change each day, and the team
    running the promotion wants to use a code list to make it easy to change the 
    combination.The code list contains groups of fruits. Both the order of the 
    groups within the code list and the order of the fruits within the groups 
    matter. However, between the groups of fruits, any number, and type of fruit
    is allowable. The term "anything" is used to allow for any type of fruit to 
    appear in that location within the group.

  Consider the following secret code list: [[apple, apple], [banana, anything, 
  banana]]

  Based on the above secret code list, a customer who made either of 
  the following purchases would win the prize:
  
  orange, apple, apple, banana, orange, banana
  
  apple, apple, orange, orange, banana, apple, banana, banana

  Write an algorithm to output 1 if the customer is a winner else output 0.

  Input
  The input to the function/method consists of two arguments:
  codeList, a list of lists of strings representing the order and grouping of spec
  ific fruits that must be purchased in order to win the prize for the day.
  shoppingCart, a list of strings representing the order in which a customer purch
  ases fruit.

  Output
  Return an integer 1 if the customer is a winner else return 0.

  Note
  'anything' in the codeList represents that any fruit can be ordered in place of 
  'anything' in the group. 'anything' has to be something, it cannot be "nothing."
  'anything' must represent one and only one fruit.

  If secret code list is empty then it is assumed that the customer is a winner.

  Example 1:

  Input: codeList = [[apple, apple], [banana, anything, banana]] shoppingCart = 
  [orange, apple, apple, banana, orange, banana]
  Output: 1
  Explanation:
  codeList contains two groups - [apple, apple] and [banana, anything, banana].
  The second group contains 'anything' so any fruit can be ordered in place of 
  'anything' in the shoppingCart. The customer is a winner as the customer has 
  added fruits in the order of fruits in the groups and the order of groups in the
  codeList is also maintained in the shoppingCart.

  Example 2:

  Input: codeList = [[apple, apple], [banana, anything, banana]]
  shoppingCart = [banana, orange, banana, apple, apple]
  Output: 0
  Explanation:
  The customer is not a winner as the customer has added the fruits in order of 
  groups but group [banana, orange, banana] is not following the group 
  [apple, apple] in the codeList.

  Example 3:

  Input: codeList = [[apple, apple], [banana, anything, banana]] 
  shoppingCart = [apple, banana, apple, banana, orange, banana]
  Output: 0
  Explanation:
  The customer is not a winner as the customer has added the fruits in an order 
  which is not following the order of fruit names in the first group.

  Example 4:

  Input: codeList = [[apple, apple], [apple, apple, banana]] 
  shoppingCart = [apple, apple, apple, banana]
  Output: 0
  Explanation:
  The customer is not a winner as the first 2 fruits form group 1, all three 
  fruits would form group 2, but can't because it would contain all fruits 
  of group 1.
*/

// Time and Space Complexity Analysis
// O(n * m) time and O(1) space, where n is number of code items in codeList, 
// and m is the max number of items in any one group of codeList
var freshPromotions = function (codeList, shoppingCart) {
  let currentFruit;
  let currentGroup;
  let shoppingItem = null;

  // if codeList is empty, the customer is a winner automatically
  if (codeList.length === 0) return 1;

  // for each codeList group
  for (let i = 0; i < codeList.length; i++) {
    // group of fruites with the expected order of the fruits
    currentGroup = codeList[i];

    // remove the expected fruit to be matched
    currentFruit = currentGroup.shift();

    // run while the group of fruits and the shopping list have lengths
    while (currentGroup.length && shoppingCart.length) {
      // if the shopping item does not exists, it is the first loop
      if (shoppingItem === null) {
        // is there a match between current fruit and the first item of shopping cart?
        // if there is match, update shopping item and current fruit to the next elements
        let tempItem = shoppingCart.shift();
        if (tempItem === currentFruit) {
          shoppingItem = shoppingCart.shift();
          currentFruit = currentGroup.shift();
        } else {
          // otherwise, there is no match. continue to the next loop
          continue;
        }
      }

      // the shopping item is not null
      // if current fruit es "anything", there is a match between anything and the value of shopping item
      if (currentFruit === "anything") {
        // update shopping item and current fruit to the next elements and continue
        shoppingItem = shoppingCart.shift();
        currentFruit = currentGroup.shift();
        continue;
      }

      // if the next shopping item is not a match with current fruit the order was broken and the client lose the promotion
      if (currentFruit !== shoppingItem) return 0;

      // there is a match, so update shopping item and current fruit to the next elements
      shoppingItem = shoppingCart.shift();
      currentFruit = currentGroup.shift();
    }
  }

  return (shoppingCart.length >= 0 && currentGroup.length === 0) ? 1 : 0;
};

console.log(freshPromotions([["apple", "apple"], ["banana", "anything", "banana"]], ["orange", "apple", "apple", "banana", "orange", "banana"])); // 1
console.log(freshPromotions([["apple", "apple"], ["banana", "anything", "banana"]], ["banana", "orange", "banana", "apple", "apple"])); // 0
console.log(freshPromotions([["apple", "apple"], ["banana", "anything", "banana"]], ["apple", "banana", "apple", "banana", "orange", "banana"])); // 0
console.log(freshPromotions([["apple", "apple"], ["apple", "apple", "banana"]] , ["apple", "apple", "apple", "banana"])); // 0