var hasConflict = function (schedules) {
  // sort schedules in increasing order, using startTime as a reference
  // the schedule intervals will be ordered from smallest to largest startTime
  schedules = schedules.sort((a, b) => { 
    startTime1 = a.startTime.split(":");
    startTime2 = b.startTime.split(":");

    startTimeInSeconds1 = Number(startTime1[startTime1.length - 1]);
    startTimeInSeconds2 = Number(startTime2[startTime2.length - 1]);

    return startTimeInSeconds1 - startTimeInSeconds2;
  });

  // the initial interval in the array
  const lastInterval = schedules.shift();
  // grab the end time in milliseconds
  let lastIntervalEndTimeInMilliseconds = Number(lastInterval.endTime.split(":")[2]) * 1000;

  
  while (schedules.length) {
    // grab the next interval
    const nextInterval = schedules.shift();
    // grab the start time in milliseconds
    let nextIntervalStartTimeInMilliseconds = Number(nextInterval.startTime.split(":")[2]) * 1000;

    // there is a conflict, so return true
    if (lastIntervalEndTimeInMilliseconds - nextIntervalStartTimeInMilliseconds > 0) return true;
  }

  return false;
};

const schedules1 = [
  {
    ScheduleId: "Amazon - p123",
    startTime: "4:00:00",
    endTime: "4:00:10"
  },
  {
    ScheduleId: "Amazon - p124",
    startTime: "4:00:05",
    endTime: "4:00:15"
  },
  {
    ScheduleId: "Amazon - p125",
    startTime: "4:00:20",
    endTime: "4:00:30"
  }
];
console.log(hasConflict(schedules1)); // true

const schedules2 = [
  {
    ScheduleId: "Amazon - p123",
    startTime: "4:00:00",
    endTime: "4:00:10",
  },
  {
    ScheduleId: "Amazon - p124",
    startTime: "4:00:10",
    endTime: "4:00:15",
  },
  {
    ScheduleId: "Amazon - p125",
    startTime: "4:00:20",
    endTime: "4:00:30",
  },
];
console.log(hasConflict(schedules2)); // false