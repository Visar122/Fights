import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FigherService {
  private apiUrl = 'http://localhost:3000'; // Adjust this URL as per your API endpoint

  constructor(private http: HttpClient) { }

  getFighters(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${category}`);
  }

  searchFighter(searchTerm: string): Observable<any[]> {
    // Assuming your API supports searching fighters
    // Adjust the endpoint and parameters accordingly
    return this.http.get<any[]>(`${this.apiUrl}/search?term=${searchTerm}`);
  }

  getFighterById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/fighters/${id}`);
  }
  
  
}
