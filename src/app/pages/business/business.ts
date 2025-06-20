import { Component } from '@angular/core';
import { NewsService } from '../../service';

@Component({
  selector: 'app-business',
  imports: [],
  templateUrl: './business.html',
  styleUrl: './business.css',
})
export class Business {
  public business!: any[];
  constructor(private service: NewsService) {} //inject
  ngOnInit() {
    this.onLoad;
  }
  onLoad() {
    this.service.getSports().subscribe((data: any) => {
      this.business = data.articles;
      console.log('busineess is displayed');
    });
  }
}
