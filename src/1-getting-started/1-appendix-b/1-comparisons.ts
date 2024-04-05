const dayStart = "07:30";
const dayEnd = "17:45";

/**
 * Returns true if the meeting falls entirely within the work day (according to the times specified in `dayStart` and `dayEnd`);
 * returns false if the meeting violates the work day bounds.
 * @param startTime 24-hour format as a string "hh:mm")
 * @param durationMinutes number of minutes
 */
export function scheduleMeeting(startTime: string, durationMinutes: number): boolean {
  const startTimeMinutes = timeInMinutes(startTime);
  const endTimeMinutes = startTimeMinutes + durationMinutes;

  const dayStartMinutes = timeInMinutes(dayStart);
  const dayEndMinutes = timeInMinutes(dayEnd);

  return startTimeMinutes >= dayStartMinutes && endTimeMinutes <= dayEndMinutes;
}

/**
 * Returns the number of minutes since midnight for a given time.
 * @param time 24-hour format as a string "hh:mm"
 */
function timeInMinutes(time: string): number {
  const [hour, minute] = parseTime(time);

  return hour * 60 + minute;
}

/**
 * Returns the hour and minute components of a time string.
 * @param time 24-hour format as a string "hh:mm"
 */
function parseTime(time: string): [number, number] {
  const [hour, minute] = time.split(":").map(Number);

  if(hour === undefined || minute === undefined || isNaN(hour) || isNaN(minute) || hour < 0 || hour > 23 || minute < 0 || minute > 59) {
    throw new Error("Invalid start time. Must be in 24-hour format as a string \"hh:mm\"");
  }

  return [hour, minute];
}

