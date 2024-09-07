import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RandomService, ViewingModes } from '../random.service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltip } from '@angular/material/tooltip';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'calendar-header',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatTooltip,
  ],
  templateUrl: './calendar-header.component.html',
  styleUrl: './calendar-header.component.css',
})
export class CalendarHeader {
  private randomService = inject(RandomService);
  selectedMode$ = this.randomService.viewingMode$;
  viewingDate$ = this.randomService.viewingDate$;
  viewingMonthLong$ = this.viewingDate$.pipe(
    map((date) => date.toLocaleString('default', { month: 'long' }))
  );
  viewingYear$ = this.viewingDate$.pipe(map((date) => date.getFullYear()));

  protected selectViewingMode(viewingMode: ViewingModes) {
    this.randomService.setViewingMode(viewingMode);
  }

  protected goToToday() {}

  protected goToPrevious() {
    this.randomService.previous();
  }

  protected goToNext() {
    this.randomService.next();
  }

  // These functions are required because dynamic variables are not permitted in mat tooltips.
  protected getPreviousMatTooltipText(mode: ViewingModes | null) {
    return mode ? `Previous ${mode.toLowerCase()}` : null;
  }

  protected getNextMatTooltipText(mode: ViewingModes | null) {
    return mode ? `Next ${mode.toLowerCase()}` : null;
  }
}
