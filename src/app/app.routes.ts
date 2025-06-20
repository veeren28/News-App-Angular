import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Sports } from './pages/sports/sports';
import { Business } from './pages/business/business';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'sports', component: Sports },
  {
    path: 'business',
    component: Business,
  },
];
