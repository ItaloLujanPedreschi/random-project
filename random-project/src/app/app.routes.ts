import { Routes } from '@angular/router';
import { DayView } from './day-view/day-view.component';
import { Home } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
];
