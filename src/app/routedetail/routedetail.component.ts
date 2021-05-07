import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BusbookingService } from '../services/busbooking.service';

@Component({
  selector: 'app-routedetail',
  templateUrl: './routedetail.component.html',
  styleUrls: ['./routedetail.component.css']
})
export class RoutedetailComponent implements OnInit {

  constructor(private busBookingService:BusbookingService) { 
    this.loadCities();
  }

  from:string="";
  to:string="";
  date:Date=new Date();

  // selectedData = new BusData(this.from, this.to, this.date);
  myControl = new FormControl();
  cities;
  //  :string[] = ['Agra','Bombay', 'Delhi', 'Pune', 'Mumbai'];

  ngOnInit(): void {
  }

  loadCities() {
    var allCities = ['Agra','Bombay', 'Delhi', 'Pune', 'Mumbai'];
    this.cities =  allCities.map(function (city) {
      return {
        value: city.toUpperCase(),
        display:city
      }
    })
 }

 searchBus() {
   console.log("Bus Clicked");
   console.log(this.from+" "+this.to+" "+this.date);
   let selectedData = new RouteData(this.from, this.to, this.date);
   this.busBookingService.selected = selectedData;   
 }

}

export class RouteData {
  from:string;
  to:string;
  date:Date;

  constructor(from, to, date) {
    this.from = from;
    this.to = to;
    this.date = date;
  }
}