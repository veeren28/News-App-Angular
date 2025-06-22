import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
// CommonModule
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule],

  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  profileClicked = false;
  profileSettings() {
    this.profileClicked = !this.profileClicked;
  }
}
