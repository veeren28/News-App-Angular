import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private baseurl = `${environment.newsDataBaseUrl}?apikey=${environment.newsDataApiKey}&country=in&language=en`;

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get(this.baseurl); // ✅ No headers
  }
}
