function sortScores(unorderedScores, highestPossibleScore) {
  // Array of 0s at indices 0..highestPossibleScore
  const scoreCounts = new Array(highestPossibleScore + 1).fill(0);

  // Populate scoreCounts
  unorderedScores.forEach((score) => {
    scoreCounts[score]++;
  });

  // Populate the final sorted array
  const sortedScores = [];

  // For each item in scoreCounts
  for (let score = highestPossibleScore; score >= 0; score--) {
    const count = scoreCounts[score];

    // For the number of times the item occurs
    for (let time = 0; time < count; time++) {
      sortedScores.push(score);
    }
  }

  return sortedScores;
}