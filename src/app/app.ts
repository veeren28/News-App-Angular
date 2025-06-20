import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './pages/home/home';
import { Sports } from './pages/sports/sports';
import { Business } from './pages/business/business';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, Sports, Business],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'news';
}
