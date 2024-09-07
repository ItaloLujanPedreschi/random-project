import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalendarDay } from './app.datatypes';

export type ViewingModes = 'DAY' | 'WEEK' | 'MONTH';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  /*
    By default, we display only calendar days for the current month
    When left or right arrow is clicked, increment or decrement the month
    currentMonth is a number when declared
  */
  currentMonth = new Date().getMonth();
  currentDay = new Date().getDate();
  allCalendarDays = this.getAllDates(2024);

  private viewingMode: ViewingModes = 'MONTH';
  private viewingMonth: number | null = this.currentMonth;
  private viewingDay: number | null = this.currentDay;
  private viewingYear: number = 2024;

  constructor(private http: HttpClient) {}

  //Returns an array of all the days for the year provided in yyyy-mm-dd format
  getAllDates(year: number): Date[] {
    let dates = [];
    let start = new Date(year, 0, 1);
    let end = new Date(year, 11, 31);

    for (let dt = start; dt <= end; dt.setDate(dt.getDate() + 1)) {
      dates.push(new Date(dt));
    }
    return dates;
  }

  next() {
    switch (this.viewingMode) {
      case 'DAY':
        break;
      case 'WEEK':
        break;
      case 'MONTH':
        this.viewNextMonth();
        break;
      default:
        break;
    }
  }

  previous() {
    switch (this.viewingMode) {
      case 'DAY':
        break;
      case 'WEEK':
        break;
      case 'MONTH':
        this.viewPreviousMonth();
        break;
      default:
        break;
    }
  }

  getViewingMode(): ViewingModes {
    return this.viewingMode;
  }

  setViewingMode(mode: ViewingModes) {
    this.viewingMode = mode;
  }

  private viewNextMonth(): void {
    if (this.viewingMonth) {
      this.viewingMonth = this.viewingMonth++;
    }
    if (this.viewingMonth === 12) {
      this.viewingMonth = 0;
      this.viewingYear++;
    }
  }

  private viewPreviousMonth(): void {
    if (this.viewingMonth) {
      this.viewingMonth = this.viewingMonth--;
    }
    if (this.viewingMonth === -1) {
      this.viewingMonth = 11;
      this.viewingYear--;
    }
  }
}
