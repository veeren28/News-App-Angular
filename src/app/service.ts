import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private baseurl = 'https://gnews.io/api/v4/top-headlines?lang=en';

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get(`${this.baseurl}&token=${environment.newsDataApiKey}`); // ✅ No headers
  }
  getSports() {
    // this.baseurl =
    //   'https://gnews.io/api/v4/top-headlines?lang=en&topic=sports&token=d95fe3f1d2cfebede2afa0159b867c11';

    return this.http.get(
      `${this.baseurl}&topic=sports&token=${environment.newsDataApiKey}`
    );
  }
  getBusiness() {
    return this.http.get(
      `${this.baseurl}&topic=business&token=${environment.newsDataApiKey}`
    );
  }
  getTechnology() {
    this.baseurl =
      'https://gnews.io/api/v4/top-headlines?lang=en&topic=technology&token=d95fe3f1d2cfebede2afa0159b867c11';
    return this.http.get(
      `${this.baseurl}&topic=technology&token=${environment.newsDataApiKey}`
    );
  }
}
