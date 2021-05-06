import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Package } from '../model/Package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private baseURL = "http://localhost:8094";

  constructor(private http:HttpClient) { }

  getPackage():Observable<any> {
    return this.http.get(`${​​​​​​​​this.baseURL}/getpackages`)
  }

}
