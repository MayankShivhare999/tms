import { Component, OnInit } from '@angular/core';
import { Bus } from '../model/Bus';
import { BusBooking } from '../model/BusBooking';
import { Customer } from '../model/Customer';
import { RouteData } from '../model/RouteData';
import { Station } from '../model/Station';
import { BusService } from '../services/bus.service';
import { BusbookingService } from '../services/busbooking.service';
import { CustomerService } from '../services/customer.service';
import { StationService } from '../services/station.service';

@Component({
  selector: 'app-busbookingview',
  templateUrl: './busbookingview.component.html',
  styleUrls: ['./busbookingview.component.css']
})
export class BusbookingviewComponent implements OnInit {

  from_Station: Station;
  to_Station: Station;

  Bus: Bus;
  customer: Customer;
  // to_Station:Station;
  // from_Station:Station;

  from: any;
  to: any;
  date: any;

  noOfCustomer: any = 1;
  ticketfare = 0;
  rent = 250;

  constructor(private busService: BusService, private busBookingService: BusbookingService, private customerService: CustomerService, private stationService: StationService) {
    let routeData: RouteData = this.busBookingService.selected;
    this.from = routeData.from;
    this.to = routeData.to;
    this.date = routeData.date;
    this.ticketfare = this.rent;
    this.getBusById(this.busBookingService.busSelected);
    this.getFromStationByName(this.from);
    this.getToStationByName(this.to);
    this.getCustomerById(62);
    // this.storeBusBooking();
  }



  ngOnInit(): void {
  }


  onDecrement() {
    if (this.noOfCustomer != 1) {
      this.noOfCustomer--;
      this.rent = this.rent - this.ticketfare;
    }

  }

  onIncrement() {
    this.noOfCustomer++;
    this.rent = this.rent + this.ticketfare;
  }

  storeBusBooking() {
    let busBooking: BusBooking = new BusBooking(this.noOfCustomer, this.rent, new Date(), this.date, this.Bus.dep, this.Bus.arr, this.customer, this.from_Station, this.to_Station, this.Bus);
    console.log(busBooking);
    this.addBusBooking(busBooking);
  }

  addBusBooking(busBooking:BusBooking) {
    this.busBookingService.addBusBooking(busBooking).subscribe(
      data => {
        console.log("Bus Booked...");
      },
      error => {
        console.log("Something went wrong... Bus Not Booked...");
      }
    )
  }

  getBusById(id: number) {
    this.busService.getBusById(id).subscribe(data => {
      this.Bus = data;
    },
      error => {
        console.log(error + "Error Occured");
      }
    )
  }

  // getStationByName(name:string):Station {
  //   this.stationService.getStationByName(name).subscribe(
  //     data => {
  //       return data;
  //     }
  //   )
  //   return null;
  // }

  getToStationByName(name: string) {
    this.stationService.getStationByName(name).subscribe(
      data => {
        this.to_Station = data;
      }
    )
    return null;
  }

  getFromStationByName(name: string) {
    this.stationService.getStationByName(name).subscribe(
      data => {
        this.from_Station = data;
      }
    )
  }

  getCustomerById(id: number) {
    this.customerService.getCustomerById(id).subscribe(data => {
      {
        this.customer = data;
      }
    });
  }

}
