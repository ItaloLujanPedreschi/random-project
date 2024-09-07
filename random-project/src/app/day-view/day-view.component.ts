import { Component, Input } from '@angular/core';

@Component({
  selector: 'day-view',
  standalone: true,
  imports: [],
  templateUrl: './day-view.component.html',
  styleUrl: './day-view.component.css',
})
export class DayView {
  @Input() day = '';
}
