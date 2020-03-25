import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private URL = `https://swapi.co/api/people/?page=`;

  constructor(private http:HttpClient) { }

  getPeople(page:number){
    return this.http.get(`${this.URL}${page}`);
  }
}
