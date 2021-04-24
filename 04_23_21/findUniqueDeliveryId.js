function findUniqueDeliveryId(deliveryIds) {

  // create a set to store the ids
  let pendingOrders = new Set();

  // traverse the set and...
  deliveryIds.forEach(id => {
    // ...if we have seen the id before, remove it
    if (pendingOrders.has(id)) {
      pendingOrders.delete(id)
    } else {
      // ...otherwise, we haven't seen this id before, so remember that the order departed
      pendingOrders.add(id)
    }
  });

  // if the set has a remaining order that has not been removed, this is our stolen drone
  // return the id
  if (pendingOrders.size) return pendingOrders.values().next().value;

  return null;
}

console.log(findUniqueDeliveryId([1])); // 1
console.log(findUniqueDeliveryId([1,2,2])); // 1
console.log(findUniqueDeliveryId([3,3,2,2,1])); // 1
console.log(findUniqueDeliveryId([3,2,1,2,3])); // 1
console.log(findUniqueDeliveryId([2, 5, 4, 8, 6, 3, 1, 4, 2, 3, 6, 5, 1])); // 8