import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service';
import { Newscard } from '../../components/newscard/newscard';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Newscard],
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
      this.news = data.articles; // ✅ Use 'results' from API
      console.log('news:', this.news);
      console.log(this.news);
    });
  }
}
