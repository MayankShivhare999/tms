import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotelBooking } from '../model/HotelBooking';

@Injectable({
  providedIn: 'root'
})
export class HotelbookingService {

  baseURL = "http://localhost:8094";

  storedData:HotelBooking;

  constructor(private http:HttpClient) { }

  addHotelBooking(hotelBooking:HotelBooking) {
    return this.http.post(`${this.baseURL}/addhotelbooking`, hotelBooking);
  }

  
}
