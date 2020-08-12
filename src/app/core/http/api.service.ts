import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment as env } from '@env/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getTestimonials(page=1) {
    return this.http.get(environment.apiRoot + 'users', {
      params: {
        page: page.toString(),
      }
    });
  }
}
