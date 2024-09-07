import { Component } from '@angular/core';
import { RandomService } from '../random.service';
import { DayView } from '../day-view/day-view.component';

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
  calendarSections: Date[][] = [];
  constructor(private randomService: RandomService) {
    this.currentMonth = this.randomService.currentMonth;
    this.currentDay = this.randomService.currentDay;
    this.currentCalendarDays = this.randomService.allCalendarDays.filter(
      (date) => date.getMonth() === this.currentMonth
    );

    this.generateSections(this.currentCalendarDays);
  }

  generateSections(currentCalendarDays: Date[]) {
    var currentSection: Date[] = [];

    //Adding empty slots if we are starting the month not on Sunday
    let stop = currentCalendarDays[0];

    for (let i = 0; i < currentCalendarDays.length; i++) {
      var currentDate = currentCalendarDays[i];
      var weekDay = currentDate.getDay(); //Sunday - Saturday : 0 - 6
      currentSection.push(currentDate);
      if (weekDay == 6) {
        //We are done adding our current section so reset the list
        this.calendarSections.push(currentSection);
        currentSection = [];
      }
    }

    //Adding empty slots if we are ending the month not on a Saturday
  }
}
