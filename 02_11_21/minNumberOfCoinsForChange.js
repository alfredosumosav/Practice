function minNumberOfCoinsForChange(n, denoms) {
  let numCoins = new Array(n + 1).fill(Infinity);
  numCoins[0] = 0;

  for (const denom of denoms) {
    console.log(denom);
    for (let i = 0; i < numCoins.length; i++) {
      if (denom <= i) {
        numCoins[i] = Math.min(numCoins[i], 1 + numCoins[i - denom]);
      }
    }
  }
  console.log(numCoins);
  return numCoins[n] !== Infinity ? numCoins[n] : -1;
}