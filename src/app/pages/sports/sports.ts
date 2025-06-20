import { Component } from '@angular/core';
import { NewsService } from '../../service';

@Component({
  selector: 'app-sports',
  imports: [],
  templateUrl: './sports.html',
  styleUrl: './sports.css',
})
export class Sports {
  public sports!: any[];
  constructor(private service: NewsService) {} //inject
  ngOnInit() {
    this.onLoad;
  }
  onLoad() {
    this.service.getSports().subscribe((data: any) => {
      this.sports = data.articles;
      console.log('sports is displayed');
    });
  }
}
