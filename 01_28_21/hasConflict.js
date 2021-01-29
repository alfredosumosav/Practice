// O(n * log(n)) time and O(1) space
var hasConflict = function (schedules) {
  // format schedule seconds to milliseconds
  schedules = schedules.map(schedule => {
    return {
      scheduleId: schedule.scheduleId,
      startTime: Number(`${schedule.startTime[schedule.startTime.length - 2]}${schedule.startTime[schedule.startTime.length - 1]}`) * 1000,
      endTime: Number(`${schedule.endTime[schedule.endTime.length - 2]}${schedule.endTime[schedule.endTime.length - 1]}`) * 1000
    };
  });

  // sort schedules in increasing order, using startTime as a reference
  // the schedule intervals will be ordered from smallest to largest startTime
  schedules = schedules.sort((a, b) => a.startTime - b.startTime);

  // the initial interval in the array
  const lastInterval = schedules.shift();

  // grab the end time in milliseconds
  let lastIntervalEndTimeInMilliseconds = lastInterval.endTime;

  
  while (schedules.length) {
    // grab the next interval
    const nextInterval = schedules.shift();

    // grab the start time in milliseconds
    let nextIntervalStartTimeInMilliseconds = nextInterval.startTime;

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