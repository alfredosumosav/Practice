function maximumOccurringCharacter(text) {
  let hash = {};
  let maxOccurrence = -Infinity;
  let result = [];

  // contar ocurrencia de cada caracter y su indice menor
  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (!hash.hasOwnProperty(char)) {
      hash[char] = [1, i];
    } else {
      hash[char][0]++;
    }
  }

    // si hay un empate de ocurrencias (mas de 1)
    for (const key in hash) {
      if (hash[key][0] > maxOccurrence) { 
        maxOccurrence = hash[key][0];
        result = [];
      }
    }
    // encontrar ocurrencia con el menor indice
  // retornar respuesta
}

console.log(
  maximumOccurringCharacter(
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
  )
); // a