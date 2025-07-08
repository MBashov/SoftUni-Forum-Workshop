import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Post } from './types/post';
import { Theme } from './types/theme';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getPosts(limit?: number) {
    let url = `${environment.apiUrl}/posts`;

    if (limit) {
      url += `?limit=${limit}`;
    }
    
    return this.http.get<Post[]>(url);
  }

  getThemes() {
    return this.http.get<Theme[]>(`${environment.apiUrl}/themes`);
  }
}
