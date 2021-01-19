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

var freshPromotions = function (codeList, shoppingCart) {
  let currentFruit;
  let currentGroup;
  let shoppingItem = null;

  // si codeList esta vacio inicialmente, se gana automaticamente!
  if (codeList.length === 0) return 1;

  // para todos los grupos de codeList
  for (let i = 0; i < codeList.length; i++) {
    // console.log(codeList[i]);
    // cada grupo, with the expected order of the fruits
    currentGroup = codeList[i];
    // empezamos con current fruit
    currentFruit = currentGroup.shift();

    while (currentGroup.length && shoppingCart.length) {
      // si el shopping item no existe (null), es la primera vez.
      if (shoppingItem === null) {
        // hay match entre current fruit y el primer item de shopping cart?
        // si hay match actualiza shopping item y current fruit a los siguientes elementos
        let tempItem = shoppingCart.shift();
        if (tempItem === currentFruit) {
          shoppingItem = shoppingCart.shift();
          currentFruit = currentGroup.shift();
        } else {
          // de lo contrario, no hay match. continua.
          continue;
        }
      }

      // shopping item existe y ya hay un match.
      // si current fruit es "anything", hay un match entre anything y el valor de shopping item
      if (currentFruit === "anything") {
        // actualiza shopping item y current fruit a los siguientes elementos y continua.
        shoppingItem = shoppingCart.shift();
        currentFruit = currentGroup.shift();
        continue;
      }

      // si el siguiente shopping item no es match con current fruit, se
      // rompio el orden y el cliente perdio la promocion
      if (currentFruit !== shoppingItem) return 0;

      // si llega aqui, definitivamente es un match. entonces actualiza
      // shopping item y current fruit a los siguientes elementos
      shoppingItem = shoppingCart.shift();
      currentFruit = currentGroup.shift();
    }
  }

  if (currentGroup.length === 0) {
    return (shoppingCart.length >= 0) ? 1 : 0;
  }

  return (shoppingCart.length === 0 && currentGroup.length === 0) ? 1 : 0;
};

console.log(freshPromotions([["apple", "apple"], ["banana", "anything", "banana"]], ["orange", "apple", "apple", "banana", "orange", "banana"])); // 1
console.log(freshPromotions([["apple", "apple"], ["banana", "anything", "banana"]], ["banana", "orange", "banana", "apple", "apple"])); // 0
console.log(freshPromotions([["apple", "apple"], ["banana", "anything", "banana"]], ["apple", "banana", "apple", "banana", "orange", "banana"])); // 0
console.log(freshPromotions([["apple", "apple"], ["apple", "apple", "banana"]] , ["apple", "apple", "apple", "banana"])); // 0