import { Component } from '@angular/core';
import { NewsService } from '../../service';
import { Newscard } from '../../components/newscard/newscard';
@Component({
  selector: 'app-sports',
  imports: [Newscard],
  templateUrl: './sports.html',
  styleUrl: './sports.css',
})
export class Sports {
  public sports!: any[];
  constructor(private service: NewsService) {} //inject
  ngOnInit() {
    console.log('running');
    this.onLoad();
  }
  onLoad() {
    this.service.getSports().subscribe((data: any) => {
      this.sports = data.articles;
      console.log('sports is displayed', this.sports);
    });
  }
}
