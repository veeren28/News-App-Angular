import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterModule],

  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
