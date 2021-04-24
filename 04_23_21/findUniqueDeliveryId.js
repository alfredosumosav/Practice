/*
Your company delivers breakfast via autonomous quadcopter drones. And something
mysterious has happened.

Each breakfast delivery is assigned a unique ID, a positive integer. When one of
the company's 100 drones takes off with a delivery, the delivery's ID is added
to an array, deliveryIdConfirmations. When the drone comes back and lands,
the ID is again added to the same array.

After breakfast this morning there were only 99 drones on the tarmac. One of the
drones never made it back from a delivery. We suspect a secret agent from Amazon
placed an order and stole one of our patented drones. To track them down, we
need to find their delivery ID.

Given the array of IDs, which contains many duplicate integers and one unique
integer, find the unique integer.

NOTE: The IDs are not guaranteed to be sorted or sequential. Orders aren't always
fulfilled in the order they were received, and some deliveries get cancelled
before takeoff.
*/

// Time and space complexity analysis
// O(n) time and O(1) space, where n is the number of elements inside the
// deliveryIds input array.
function findUniqueDeliveryId(deliveryIds) {

  var uniqueDeliveryId = 0;

  // for each delivery id
  deliveryIds.forEach(deliveryId => {
    // XOR with previous id and update previous value
    uniqueDeliveryId ^= deliveryId;
  });

  // if all ids are repeated except one, XOR will cancel those that repeat
  // and leaving as a result the id that appears exactly once!
  return uniqueDeliveryId;
}

console.log(findUniqueDeliveryId([1])); // 1
console.log(findUniqueDeliveryId([1,2,2])); // 1
console.log(findUniqueDeliveryId([3,3,2,2,1])); // 1
console.log(findUniqueDeliveryId([3,2,1,2,3])); // 1
console.log(findUniqueDeliveryId([2, 5, 4, 8, 6, 3, 1, 4, 2, 3, 6, 5, 1])); // 8