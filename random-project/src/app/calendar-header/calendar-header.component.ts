import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RandomService, ViewingModes } from '../random.service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'calendar-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
  ],
  templateUrl: './calendar-header.component.html',
  styleUrl: './calendar-header.component.css',
})
export class CalendarHeader {
  selectedMode: ViewingModes = 'MONTH';

  constructor(private randomService: RandomService) {
    this.selectedMode = this.randomService.getViewingMode();
  }

  protected selectViewingMode(viewingMode: ViewingModes) {
    this.randomService.setViewingMode(viewingMode);
  }

  protected goToToday() {
    console.log('TODAY');
  }

  protected goToPrevious() {
    this.randomService.previous();
    console.log('PREV');
  }

  protected goToNext() {
    this.randomService.next();
    console.log('NEXT');
  }
}
