import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  news: any[] = [];

  constructor(private newsServices: NewsService) {}

  ngOnInit() {
    console.log('Component initialized');
    this.loadPage();
  }

  loadPage() {
    this.newsServices.getNews().subscribe((data: any) => {
      console.log('Full API response:', data);
      this.news = data.results; // ✅ Use 'results' from API
      console.log('News:', this.news);
    });
  }
}
