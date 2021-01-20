/*
You need to fill a cargo with containers. Each container has multiple items.

Given the number of containers the cargo can load, write an algorithm to return 
the maximum number of items that can be shipped.

Input

num, the number of containers;
containers, a list of integers, representing the number of containers;
itemSize, an integer representing size of itemsPerContainer;
itemsPerContainer, a list of integers representing the number of items packed 
in each container;
cargoSize, an integer representing the number of containers the cargo can carry.

Output

Return an integer representing the maximum items that can be carried by the 
cargo.

Example
Input:
num=3
containers=[3,1,2]
itemSize=3
itemsPerContainer=[1,2,3]
cargoSize=4

Output
9

Explanation:
Multiply containers by itemsPerContainer. We have: 3 containers with 1 item 
each, 1 container with 2 items each and 2 containers with 3 items each.

Put them together: [1,1,1,2,3,3]

The cargoSize is 4, so we can load the top 4 from the above array, which 
is [3,3,2,1], and return the sum 9.
*/

// Time and Space Complexity Analysis
// O(n) time and O(n) space, where n is the number container types (how many distinct containers are)
var loadTheCargo = function (num, containers, itemSize, itemsPerContainer, cargoSize) {
  // los items de cada contenedor
  let containerItems = [];
  let maxNumOfItems = 0;

  // iterar sobre containers
  for (let i = 0; i < num; i++) {
    // para cada contenedor, empujar el # de items por container multiplicado el # de contenedores
    numOfContainers = containers[i];

    for (let j = 0; j < numOfContainers; j++) {
      containerItems.push(itemsPerContainer[i]);
    }
  }
  
  // ordenar la lista, ordern incrementando
  containerItems = containerItems.sort((a, b) => a - b);

  // retornar los ultimos cargoSize elementos
  for (let k = 0; k < cargoSize; k++) {
    // saca el ultimo elemento de containerItems y empujalo a maxNumberOfItems
    maxNumOfItems += containerItems.pop();
  }
  return maxNumOfItems;
};

console.log(loadTheCargo(3, [3, 1, 2], 3, [1, 2, 3], 4)); // 9