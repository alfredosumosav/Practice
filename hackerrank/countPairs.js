function countPairs(numbers, k) {
  // crea un contador y un set
  let count = 0;
  let set = new Set();

  // busca todos los pares
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      const a = numbers[i];
      const b = numbers[j];

      // si el par no esta en el set
      if (!set.has(`${a},${b}`)) {
        // agregalo (distinto y unico)
        set.add(`${a},${b}`);

        // si satisface condicion, aumenta el contador
        if (a + k === b) count++;
      }
      // si si esta, descarta el par
    }
  }

  // retorna el contador
  return count;
}

console.log(countPairs([1, 1, 1, 2], 1)); // 1
console.log(countPairs([1, 1, 2, 2, 3, 3], 1)); // 2
console.log(countPairs([1, 2, 3, 4, 5, 6], 2)); // 4
console.log(countPairs([1, 2, 5, 6, 9, 10], 2)); // 0