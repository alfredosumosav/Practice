/*
Write a function winningHand(hand1, hand2) that takes in two strings
representing a hand of 4 cards. Return the string of the hand with the
higher total score. If there is a tie, return 'DRAW'. Possible cards are
J, Q, K.

J = 1 point
Q = 2 points
K = 3 points
*/

// O(1) time O(1) space
function winningHand(hand1, hand2) {
  const cards = {
    J: 1,
    Q: 2,
    K: 3,
  };
  let hand1Points = 0;
  let hand2Points = 0;

  for (let i = 0; i < 4; i++) {
    const card1 = hand1[i];
    const card2 = hand2[i];
    hand1Points += cards[card1];
    hand2Points += cards[card2];
  }

  if (hand1Points > hand2Points) {
    return hand1;
  } else if (hand1Points < hand2Points) {
    return hand2;
  } else {
    return "DRAW";
  }
}

console.log(winningHand("JQKJ", "QQJJ")); // => 'JQKJ'
console.log(winningHand("KJKJ", "QQQK")); // => 'QQQK'
console.log(winningHand("JKJJ", "QQJJ")); // => 'DRAW'
console.log(winningHand("KJKJ", "QQQQ")); // => 'DRAW'