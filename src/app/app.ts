import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './pages/home/home';
import { Sports } from './pages/sports/sports';
import { Business } from './pages/business/business';
import { FormsModule } from '@angular/forms'; // ✅ Correct spelling

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Required if using `imports` inside a component
  imports: [RouterOutlet, Navbar, Home, Sports, Business, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'], // ✅ Note: It's `styleUrls`, not `styleUrl`
})
export class App {
  protected title = 'news';
}
