const dayStart = "07:30";
const dayEnd = "17:45";

/**
 * Returns true if the meeting falls entirely within the work day (according to the times specified in `dayStart` and `dayEnd`);
 * returns false if the meeting violates the work day bounds.
 * @param startTime 24-hour format as a string "hh:mm")
 * @param durationMinutes number of minutes
 */
export function scheduleMeeting(startTime: string, durationMinutes: number): boolean {
  // ..TODO..
}

