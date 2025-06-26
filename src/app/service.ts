import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private baseurl =
    'https://gnews.io/api/v4/top-headlines?lang=en&token=d95fe3f1d2cfebede2afa0159b867c11';

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get(this.baseurl); // ✅ No headers
  }
  getSports() {
    this.baseurl =
      'https://gnews.io/api/v4/top-headlines?lang=en&topic=sports&token=d95fe3f1d2cfebede2afa0159b867c11';

    return this.http.get(this.baseurl);
  }
  getBusiness() {
    this.baseurl =
      'https://gnews.io/api/v4/top-headlines?lang=en&topic=business&token=d95fe3f1d2cfebede2afa0159b867c11';
    return this.http.get(this.baseurl);
  }
  getTechnology() {
    this.baseurl =
      'https://gnews.io/api/v4/top-headlines?lang=en&topic=technology&token=d95fe3f1d2cfebede2afa0159b867c11';
    return this.http.get(this.baseurl);
  }
}
