import { Component } from '@angular/core';
import { NewsService } from '../../service';
import { Newscard } from '../../components/newscard/newscard';
@Component({
  selector: 'app-business',
  imports: [Newscard],
  templateUrl: './business.html',
  styleUrl: './business.css',
})
export class Business {
  public business!: any[];
  constructor(private service: NewsService) {} //inject
  ngOnInit() {
    this.onLoad();
  }
  onLoad() {
    this.service.getBusiness().subscribe((data: any) => {
      this.business = data.articles;
      console.log('busineess is displayed');
    });
  }
}
