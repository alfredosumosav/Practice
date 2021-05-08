// https://leetcode.com/problems/finding-the-users-active-minutes

var findingUsersActiveMinutes = function(logs, k) {

  // create map of users, each pointing to the unique minutes in which they performed an action (UAMs)
  let users = {}
  for (log of logs) {
    const [id, time] = log
    if (users.hasOwnProperty(id)) {
        users[id].add(time);
    } else {
        users[id] = new Set([time])
    }
  }

  // llenar los uams, que contienen key con valor de uam, apuntando al numero de usuarios que contienen ese numero de uams
  uams = {}
  for (user in users) {
    // console.log(users[user].size)
    if (uams[users[user].size]) {
        uams[users[user].size]++
    } else {
        uams[users[user].size] = 1;
    }
  }

  // create the result array in the required format
  let result = [];
  for (let i = 0; i < k; i++) {
      result.push(uams[i + 1] || 0)
  }

  return result
  };