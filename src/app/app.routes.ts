import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Sports } from './pages/sports/sports';
import { Business } from './pages/business/business';
import { RegistrationPage } from './pages/registration-page/registration-page';
import { Login } from './pages/login/login';
import { Technology } from './pages/technology/technology';

export const routes: Routes = [
  { path: 'registrationForm', component: RegistrationPage },
  { path: 'login', component: Login },
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'sports', component: Sports },
  { path: 'technology', component: Technology },

  {
    path: 'business',
    component: Business,
  },
];
