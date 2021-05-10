import { Component, OnInit } from '@angular/core';
import { BusBooking } from '../model/BusBooking';
import { BusbookingService } from '../services/busbooking.service';

@Component({
  selector: 'app-mybusbooking',
  templateUrl: './mybusbooking.component.html',
  styleUrls: ['./mybusbooking.component.css']
})
export class MybusbookingComponent implements OnInit {

  constructor(private busBookingService:BusbookingService) {
    this.getBusBookingByCustomerId(62);
   }

  busbookings:BusBooking[];

  // busbookings = [
  //   {"id":101, "bookingDate":"04/05/2021", "journeyDate":"24/05/2021", "from":"Pune", "to":"Mumbai", "dep":"12:00", "arr":"14:00","noOfPass":"2", "amount":"500"},
  //   {"id":101, "bookingDate":"04/05/2021", "journeyDate":"24/05/2021", "from":"Pune", "to":"Mumbai", "dep":"12:00", "arr":"14:00","noOfPass":"2", "amount":"500"},
  //   {"id":101, "bookingDate":"04/05/2021", "journeyDate":"24/05/2021", "from":"Pune", "to":"Mumbai", "dep":"12:00", "arr":"14:00","noOfPass":"2", "amount":"500"},
  //   {"id":101, "bookingDate":"04/05/2021", "journeyDate":"24/05/2021", "from":"Pune", "to":"Mumbai", "dep":"12:00", "arr":"14:00","noOfPass":"2", "amount":"500"},
  //   {"id":101, "bookingDate":"04/05/2021", "journeyDate":"24/05/2021", "from":"Pune", "to":"Mumbai", "dep":"12:00", "arr":"14:00","noOfPass":"2", "amount":"500"}
  // ]

  ngOnInit(): void {
  }

  getBusBookingByCustomerId(id:number) {
    this.busBookingService.getAllBusBookingByCustomerId(id).subscribe(
      data => {
          this.busbookings = data;
      }
    )
  }

}
