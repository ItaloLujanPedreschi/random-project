import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
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

  viewingMode$ = new BehaviorSubject<ViewingModes>('MONTH');
  viewingDate$ = new BehaviorSubject<Date>(new Date());

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

  getViewingDate(): Date {
    return this.viewingDate$.getValue();
  }

  next() {
    switch (this.viewingMode$.getValue()) {
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
    switch (this.viewingMode$.getValue()) {
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
    return this.viewingMode$.getValue();
  }

  setViewingMode(mode: ViewingModes) {
    this.viewingMode$.next(mode);
  }

  private viewNextMonth(): void {
    const newDate = this.viewingDate$.getValue();
    const newMonth = newDate.getMonth() + 1;
    newDate.setMonth(newMonth);
    if (newMonth === 12) {
      newDate.setFullYear(newDate.getFullYear() + 1, 0);
    }
    this.viewingDate$.next(newDate);
  }

  private viewPreviousMonth(): void {
    const newDate = this.viewingDate$.getValue();
    const newMonth = newDate.getMonth() - 1;
    newDate.setMonth(newMonth);
    if (newMonth === -1) {
      newDate.setFullYear(newDate.getFullYear() - 1, 11);
    }
    this.viewingDate$.next(newDate);
  }
}
