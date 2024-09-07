import { Component } from '@angular/core';
import { RandomService } from '../random.service';
import { DayView } from '../day-view/day-view.component';
import { CalendarDay } from '../app.datatypes';
//import data from 'datafile';

@Component({
  selector: 'home',
  standalone: true,
  imports: [DayView],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class Home {
  currentMonth: number = 0;
  currentDay: number = 0;
  currentCalendarDays: Date[] = [];
  calendarRows: CalendarDay[][] = [];

  constructor(private randomService: RandomService) {
    this.currentMonth = this.randomService.currentMonth;
    this.currentDay = this.randomService.currentDay;
    this.currentCalendarDays = this.randomService.allCalendarDays.filter(
      (date) => date.getMonth() === this.currentMonth
    );

    this.generateSections(this.currentCalendarDays);
  }

  generateSections(currentCalendarDays: Date[]) {
    var currentSection: CalendarDay[] = []; //Days in current section
    const data: CalendarDay[] = [];
    //All our calendar days in our json that contains an event
    let savedEventDays: CalendarDay[] = data as CalendarDay[];
    let size = currentCalendarDays.length;

    // Adding empty slots if we are starting the month not on Sunday
    // let startDay = currentCalendarDays[0];

    //Go through all days of the current month. If there is no event this day, create an empty calendar day
    //If there is an event, add the calendar day saved from our json (where we found the event)
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth(); // Note: January is 0, December is 11

    // Find the number of days in the current month
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const numberOfDays = lastDayOfMonth.getDate();

    // Loop through each day of the month
    for (let day = 1; day <= numberOfDays; day++) {
      const currentDateKey = month + 1 + '/' + day + '/' + year;
      const currentDay = new Date(year, month, day);
      const weekDay = new Date(year, month, day).getDay();

      let selectedCalendarDay = savedEventDays.find(
        (day) => currentDateKey == day.key
      );

      if (selectedCalendarDay === undefined) {
        currentSection.push(new CalendarDay(currentDateKey, currentDay));
      } else {
        currentSection.push(selectedCalendarDay);
      }

      if (weekDay === 6 || day === numberOfDays) {
        //We are done adding our current section so reset the list
        this.calendarRows.push(currentSection);
        currentSection = [];
      }
    }
  }
}
