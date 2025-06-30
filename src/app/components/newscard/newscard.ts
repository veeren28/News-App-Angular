import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-newscard',
  imports: [],
  templateUrl: './newscard.html',
  styleUrl: './newscard.css',
})
export class Newscard {
  @Input() newsItem: any;
  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'src/assets/no-image-svgrepo-com.svg'; // ✅ Use your own local fallback image
  }
}
