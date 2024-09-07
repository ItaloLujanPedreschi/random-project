import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
