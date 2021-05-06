
import {​​​​​​​​ HttpClient }​​​​​​​​ from'@angular/common/http';
import {​​​​​​​​ Injectable }​​​​​​​​ from'@angular/core';
import {​​​​​​​​ Observable }​​​​​​​​ from'rxjs';
 
@Injectable({​​​​​​​​
providedIn:'root'
}​​​​​​​​)
export class HotelService {
 
  private baseUrl: string = 'http://localhost:8094';
 
  constructor(private http: HttpClient) { }
 
  getAllHotels(): Observable<any> {
    return this.http.get(`${this.baseUrl}/gethotel`)
  }
}
