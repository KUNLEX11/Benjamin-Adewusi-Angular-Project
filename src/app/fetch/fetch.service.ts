import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root' 
})

export class FetchService {
  baseUrl: string= 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }
  
  getAllComment(): Observable<any>{
    return this.http.get(`${this.baseUrl}/comments`);

  }
  getAllPosts(): Observable<any>{
    return this.http.get(`${this.baseUrl}/posts`);
  }
  

  
}
