

import {​​​​​​​​ Component, OnInit }​​​​​​​​ from'@angular/core';
// import {​​​​​​​​ Hotel }​​​​​​​​ from'../model/hotel';
import {​​​​​​​​ HotelService }​​​​​​​​ from'../services/hotel.service';
 
@Component({​​​​​​​​
selector:'app-hotel',
templateUrl:'./hotelview.component.html',
styleUrls: ['./hotelview.component.css']
}​​​​​​​​)
export class HotelviewComponent implements OnInit {​​​​​​​​
 
hotels;
constructor(private service: HotelService) {​​​​​​​​ }​​​​​​​​
 
ngOnInit(): void {​​​​​​​​
this.getHotles();
  }​​​​​​​​

  onBook(id) {
    console.log(id);
    window.location.href="/";
  }
 
getHotles() {​​​​​​​​
this.service.getAllHotels().subscribe(
data=> {​​​​​​​​ this.hotels = data }​​​​​​​​,
error=> {​​​​​​​​
this.hotels = [];
console.log('Error Occured')
console.log(error);
      }​​​​​​​​
    );
  }​​​​​​​​
 
}​​​​​​​​
