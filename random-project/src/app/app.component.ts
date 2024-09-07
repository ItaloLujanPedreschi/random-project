import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomService } from './random.service';
import { CalendarHeader } from './calendar-header/calendar-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalendarHeader, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
