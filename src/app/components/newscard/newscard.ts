import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-newscard',
  imports: [],
  templateUrl: './newscard.html',
  styleUrl: './newscard.css',
})
export class Newscard {
  @Input() newsItem: any;
}
