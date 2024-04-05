import {scheduleMeeting} from "../../../src/1-getting-started/1-appendix-b/1-comparisons";

describe('scheduleMeeting', () => {
  it ('should return true if the meeting falls entirely within the work day', () => {
    expect(scheduleMeeting("7:30",30)).toEqual(true);
    expect(scheduleMeeting("11:30",60)).toEqual(true);
    expect(scheduleMeeting("17:00",45)).toEqual(true);
  });

  it ('should return false if the meeting violates the work day bounds', () => {
    expect(scheduleMeeting("7:00",15)).toEqual(false);
    expect(scheduleMeeting("07:15",30)).toEqual(false);
    expect(scheduleMeeting("17:30",30)).toEqual(false);
    expect(scheduleMeeting("18:00",15)).toEqual(false);
  })
})