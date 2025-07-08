import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${environment.apiUrl}/posts`);
  }

  getThemes() {
    return this.http.get(`${environment.apiUrl}/themes`);
  }
}
