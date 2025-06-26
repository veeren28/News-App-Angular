import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../service';

// CommonModule
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule, FormsModule],

  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  profileClicked = false;
  search = '';
  searchOn = false;
  filtered!: any[];
  news!: any[];
  constructor(public service: NewsService) {}
  profileSettings() {
    this.profileClicked = !this.profileClicked;
  }
  ngOnInit() {
    this.service.getNews().subscribe((data: any) => {
      this.news = data.articles;
    });
  }
  SearchToggle() {
    let term: string = this.search.trim();
    term = term.toLowerCase();
    if (term === '') {
      this.searchOn = false;
      this.filtered = [];
      return;
    }
    this.searchOn = true;

    this.filtered = this.news.filter((item: any) => {
      if (item.title?.substirng(0, 10).toLowerCase().includes(term)) {
        return item.title?.toLowerCase().substirng(0, 10).includes(term);
      } else {
        return (item.title = 'not Found');
      }
    });

    console.log(this.filtered);
  }
}
