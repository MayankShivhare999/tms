import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypackagebooking',
  templateUrl: './mypackagebooking.component.html',
  styleUrls: ['./mypackagebooking.component.css']
})
export class MypackagebookingComponent implements OnInit {

  constructor() { }

  packagebookings = [
    {"id":155, "bookingDate":"03/05/2021","hotel":"Naveen Mega Hotel, Goa", "noOfCustomers":3, "amount":5500}
  ]

  ngOnInit(): void {
  }

}
