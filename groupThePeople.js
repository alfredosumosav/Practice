// O(n) time and O(n) space
var groupThePeople = function (groupSizes) {
  let groups = [];
  let hash = {};

  for (let i = 0; i < groupSizes.length; i++) {
    groupSize = groupSizes[i];

    if (!hash.hasOwnProperty(groupSize)) {
      hash[groupSize] = [i];
    } else {
      hash[groupSize].push(i);
    }

    // if it is equal to the group length, then push it to groups and clean the array
    if (hash[groupSize].length === groupSize) {
      groups.push(hash[groupSize]);
      hash[groupSize] = [];
    }
  }

  return groups;
};