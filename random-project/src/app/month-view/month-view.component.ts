import { Component } from '@angular/core';
import { MonthViewCell } from './month-view-cell/month-view-cell.component';
import { RandomService } from '../random.service';
import { Observable } from 'rxjs';

interface MonthCellInfo {
  position: number;
  dayOfMonth: number;
}

const DAY_ACRONYMS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

@Component({
  selector: 'month-view',
  standalone: true,
  imports: [MonthViewCell],
  templateUrl: './month-view.component.html',
  styleUrl: './month-view.component.css',
})
export class MonthView {
  viewingDate$: Observable<Date>;
  targetDate = new Date();
  cells: MonthCellInfo[][] = [];

  dayAcronyms = DAY_ACRONYMS;

  constructor(private randomService: RandomService) {
    this.viewingDate$ = this.randomService.viewingDate$;

    let currPosition = 1;
    for (let rowIdx = 0; rowIdx < 5; rowIdx++) {
      const row: MonthCellInfo[] = [];
      for (let cellIdx = 0; cellIdx < 7; cellIdx++) {
        const cell: MonthCellInfo = {
          position: currPosition,
          dayOfMonth: currPosition,
        };
        row.push(cell);
        currPosition++;
      }
      this.cells.push(row);
    }
    console.log(this.cells);
  }
}
