import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen = false;
  profileClicked = false;
  search = '';
  searchOn = false;
  filtered: any[] = [];
  news: any[] = [];

  constructor(public service: NewsService) {}

  ngOnInit() {
    this.service.getNews().subscribe((data: any) => {
      this.news = data.articles;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  profileSettings() {
    this.profileClicked = !this.profileClicked;
  }

  SearchToggle() {
    const term = this.search.trim().toLowerCase();
    if (term === '') {
      this.searchOn = false;
      this.filtered = [];
      return;
    }

    this.searchOn = true;
    this.filtered = this.news.filter((item: any) => {
      const title = item.title?.substring(0, 10).toLowerCase() || '';
      return title.includes(term);
    });
  }

  trackByFn(index: number, item: any) {
    return item?.title || index;
  }
}
