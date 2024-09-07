class CalendarEvent {
  eventTitle: string;
  timeZone: string;
  description: string;
  //Start time and end time in 24 hour format hh:mm for simplicity sakes
  startTime: string;
  endTime: string;

  constructor(
    eventTitle: string,
    timeZone: string,
    description: string,
    startTime: string,
    endTime: string
  ) {
    this.eventTitle = eventTitle;
    this.timeZone = timeZone;
    this.description = description;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

class CalendarDay {
  key: string; // Could be mm/dd/yy and we associate this key to a json of these values
  events: CalendarEvent[];

  constructor(key: string, events: CalendarEvent[]) {
    this.key = key;
    this.events = events;
  }
}
