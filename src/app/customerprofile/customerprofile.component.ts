import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {

  constructor(private customerService:CustomerService) { 

    this.customerService.getCustomerByUsername("karan1").subscribe(
      data => {
        this.currentCustomer = data;
      },
      errror => {
        console.log("Nothing");
        
      }
    )

  }

  today = new Date();

  bookingsrc = "";
  
  currentCustomer:Customer = new Customer();

  ngOnInit(): void {
    setInterval(() => {
      this.today = new Date();
      }, 1000);
  }

  


}
