import { Component, OnInit } from '@angular/core';
import { Bus } from '../busview/busview.component';
import { BusService } from '../services/bus.service';
import { BusbookingService } from '../services/busbooking.service';

@Component({
  selector: 'app-busbookingview',
  templateUrl: './busbookingview.component.html',
  styleUrls: ['./busbookingview.component.css']
})
export class BusbookingviewComponent implements OnInit {

  constructor(private busService:BusService, private busBookingService:BusbookingService) { }

  Bus:any;



  noOfCustomer:any = 1;
  ticketfare = 0;
  rent = 250;

  ngOnInit(): void {
    this.ticketfare = this.rent;
    this.getBusById(this.busBookingService.busSelected);
    console.log(this.Bus);
    // console.log(this.Bus.seats);
    
  }


  onDecrement() {
    if(this.noOfCustomer!=1){
      this.noOfCustomer--;
      this.rent = this.rent - this.ticketfare;
    }
    
  }

  onIncrement() {
    console.log("Inc");
    this.noOfCustomer++;
    this.rent = this.rent + this.ticketfare;
  }

  getBusById(id:number) {
    this.busService.getBusById(id).subscribe(data => {
      console.log(data+" Data");
      
      this.Bus = data;
    }
      )
  }
}
