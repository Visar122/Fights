import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FigherService {
  private apiUrl = 'http://localhost:3000'; // Adjust this URL as per your API endpoint

  constructor(private http: HttpClient) { }

  FighterList() {
    return this.http.get<any[]>(`${this.apiUrl}/fighters`);
  }

  searchFighter(searchTerm: string): Observable<any[]> {
    // Assuming your API supports searching fighters
    // Adjust the endpoint and parameters accordingly
    return this.http.get<any[]>(`${this.apiUrl}/search?term=${searchTerm}`);
  }

 
  GetFightersbyId(id:string) {
    return this.http.get<any>(`${this.apiUrl}/fighters/${id}`);
  }
  
  PopularFights(){
    return this.http.get<any[]>('http://localhost:3000/upcoming_events?_limit=10');
   }
   
   getEventById(eventid:string) {
    return this.http.get<any>(`${this.apiUrl}/upcoming_events/${eventid}`);
  }
  getevents() {
    return this.http.get<any[]>(`${this.apiUrl}/upcoming_events`);
  }

  getBoxingEvents(): Observable<any[]> {
    // Assuming you have an endpoint that filters boxing events
    return this.http.get<any[]>(`${this.apiUrl}/upcoming_events?eventtype=Boxing`);
  }

  getUfcEvents(): Observable<any[]> {
    // Assuming you have an endpoint that filters boxing events
    return this.http.get<any[]>(`${this.apiUrl}/upcoming_events?eventtype=Ufc`);
  }
  
}
