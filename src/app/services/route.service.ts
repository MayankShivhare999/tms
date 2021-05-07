import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  private baseURL = "http://localhost:8094"

  constructor(private http:HttpClient) { }

  getRoute(from:string, to:string) {
    return this.http.get(`${this.baseURL}/getroutebytostation/${from}/${to}`);
  }
}
