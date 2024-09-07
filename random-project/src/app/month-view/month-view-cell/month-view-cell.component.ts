import { Component, Input } from '@angular/core';

@Component({
  selector: 'month-view-cell',
  standalone: true,
  imports: [],
  templateUrl: './month-view-cell.component.html',
  styleUrl: './month-view-cell.component.css',
})
export class MonthViewCell {
  @Input({ required: true }) dayNumber!: number;
  @Input() monthName: string | undefined;
  @Input() selected = false;
}
