import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './pages/home/home';
import { Sports } from './pages/sports/sports';
import { Business } from './pages/business/business';
import { FormsModule } from '@angular/forms';
import { Login } from './pages/login/login';
import { RegistrationPage } from './pages/registration-page/registration-page'; // ✅ Correct spelling
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Required if using `imports` inside a component
  imports: [
    RouterOutlet,
    Navbar,
    Home,
    Sports,
    Business,
    FormsModule,
    Login,
    RegistrationPage,
    CommonModule,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'], // ✅ Note: It's `styleUrls`, not `styleUrl`
})
export class App {
  protected title = 'news';
  loggedIn!: boolean;
  registerClicked: boolean = false;
  submit!: boolean;
  ngOnInit() {
    this.submit = false;
  }
  Handle(success: boolean) {
    if (success) this.loggedIn = true;
    else this.loggedIn = false;
    console.log('is ' + this.loggedIn);
  }
  HandleRegister(clicked: boolean) {
    if (clicked) this.registerClicked = true;
    else this.registerClicked = false;
  }
}
