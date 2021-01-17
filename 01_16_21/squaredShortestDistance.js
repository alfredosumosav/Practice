var squaredShortestDistance = function (num, positionX, positionY) {
  // variable para la minima distancia euclidiana al cuadrado, empieza en Infinity
  let minSquaredEuclidianDistance = Infinity;
  // un set de las posiciones visitadas
  let visited = new Set();

  // encuentra cada par y para cada par de moleculas
  for (let i = 0; i < positionX.length; i++) {
    // molecula A
    let moleculeA = [positionX[i], positionY[i]];

    // recuerda esta posicion
    visited.add(`${positionX[i]},${positionY[i]}`);

    for (let j = i + 1; j < positionY.length; j++) {
      // molecula B
      let moleculeB = [positionX[j], positionY[j]];

      // si no he visitado esta posicion, tengo posiciones diferentes, entonces
      if (!visited.has(`${positionX[j]},${positionY[j]}`)) {
        // calcula la distancia euclidiana al cuadrado
        let squaredEuclidianDistance = ((moleculeB[0] - moleculeA[0]) ** 2) + ((moleculeB[1] - moleculeA[1]) ** 2);

        // si es menor que la minima distancia euclidiana al cuadrado registrada
        if (squaredEuclidianDistance < minSquaredEuclidianDistance) {
          // actualiza la minima distancia euclidiana al cuadrado registrada a este valor
          minSquaredEuclidianDistance = squaredEuclidianDistance;
        }
      }
    }
  }

  // retorna la minima distancia euclidiana al cuadrado registrada
  return minSquaredEuclidianDistance;
};

console.log(squaredShortestDistance(3, [0, 1, 2], [0, 1, 4])); // 2
console.log(squaredShortestDistance(3, [0, 1, 0], [0, 3, 0])); // 10