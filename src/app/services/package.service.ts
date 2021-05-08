import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private baseURL = "http://localhost:8094";

  selectedPackageId:any;
  selectedHotelId:any;

  constructor(private http:HttpClient) { }

  getPackage():Observable<any> {
    return this.http.get(`${​​​​​​​​this.baseURL}/getpackages`)
  }

  getPackageById(id:number):Observable<any> {
    return this.http.get(`${this.baseURL}/getpackagebyid/${id}`)
  }

}
