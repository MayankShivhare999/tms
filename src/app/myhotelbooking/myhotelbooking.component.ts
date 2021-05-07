import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myhotelbooking',
  templateUrl: './myhotelbooking.component.html',
  styleUrls: ['./myhotelbooking.component.css']
})
export class MyhotelbookingComponent implements OnInit {

  constructor() { }

  hotelbookings = [
    {"id":111, "bookingDate":"05/05/2021", "hotel":"Mansarovar Hotel, Mumbai", "checkin":"11/05/2021", "checkOut":"12/05/2021", "noOfCustomer":"1", "amount":"1200"}
  ]

  ngOnInit(): void {
  }

}
