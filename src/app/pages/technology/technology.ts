import { Component } from '@angular/core';
import { NewsService } from '../../service';
import { Newscard } from '../../components/newscard/newscard';
@Component({
  selector: 'app-technology',
  imports: [Newscard],
  templateUrl: './technology.html',
  styleUrl: './technology.css',
})
export class Technology {
  news!: any[];
  constructor(public Service: NewsService) {}
  ngOnInit() {
    this.Service.getTechnology().subscribe(
      (data: any) => (this.news = data.articles)
    );
    console.log('techNews' + this.news);
  }
}
