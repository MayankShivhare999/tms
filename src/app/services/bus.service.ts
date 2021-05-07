import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  baseURL = "http://localhost:8094"

  constructor(private http:HttpClient) { }

  getBusById(id:number) {
    return this.http.get(`${this.baseURL}/getbusbyid/${id}`);
  }
}
