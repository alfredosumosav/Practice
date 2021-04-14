// Time and space complexity analysis
// O(nlog(n)) time and O(n) space, where n is the number of meetings
// and in terms of space, worst-case scenario is: no overlapping meetings
function mergeRanges(meetings) {
  // create a deep copy of the meetings array
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  // sort by start time
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  // Initialize mergedMeetings with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    // If the current meeting overlaps with the last merged meeting, use the
    // later end time of the two
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime);
    } else {

      // Add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}

// meetings = [
//   {
//     startTime: 1, endTime: 3
//   },
//   {
//     startTime: 2, endTime: 4
//   }
// ]

// console.log(mergeRanges(meetings)); // [{ startTime: 1, endTime: 4 }]