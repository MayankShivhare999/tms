import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { HotelBooking } from '../model/HotelBooking';
import { PackageBooking } from '../model/PackageBooking';
import { PackagebookingService } from '../packagebooking.service';
import { CustomerService } from '../services/customer.service';
import { HotelbookingService } from '../services/hotelbooking.service';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {

  today = new Date();

  bookingsrc = "";
  
  currentCustomer:Customer = new Customer();

  hotelBookings:HotelBooking[];

  packageBookings:PackageBooking[];

  pBookingLen:number;

  hBookingLen:number; 

  constructor(private customerService:CustomerService, private hotelBookingService:HotelbookingService, private packageBookingService:PackagebookingService) { 

    this.customerService.getCustomerByUsername("karan1").subscribe(
      data => {
        this.currentCustomer = data;
      },
      errror => {
        console.log("Nothing");
        
      }
    )

    this.hotelBookingService.getHotelBookingByCustomerId(62).subscribe(
      data => {
        this.hotelBookings = data;
        this.hBookingLen = this.hotelBookings.length;
      },
      errors => {
        console.log("No Bookings");
      }
    )

      this.packageBookingService.getPackageBookingByCustomerId(62).subscribe(
        data => {
          this.packageBookings = data;
          this.pBookingLen = this.packageBookings.length;
        }, error => {
          console.log("Something went wrong");
          
        }
      )

  }



  ngOnInit(): void {
    setInterval(() => {
      this.today = new Date();
      }, 1000);
  }

  


}
