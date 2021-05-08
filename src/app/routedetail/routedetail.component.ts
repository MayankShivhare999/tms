import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouteData } from '../model/RouteData';
import { BusbookingService } from '../services/busbooking.service';

@Component({
  selector: 'app-routedetail',
  templateUrl: './routedetail.component.html',
  styleUrls: ['./routedetail.component.css']
})
export class RoutedetailComponent implements OnInit {

  from: string = "";
  to: string = "";
  date: Date = new Date();

  today: any;

  // selectedData = new BusData(this.from, this.to, this.date);
  myControl = new FormControl();
  cities;
  //  :string[] = ['Agra','Bombay', 'Delhi', 'Pune', 'Mumbai'];

  constructor(private busBookingService: BusbookingService, private datepipe: DatePipe) {
    let todayDate = new Date();
    this.today = this.datepipe.transform(todayDate, 'yyyy-MM-dd');
    this.loadCities();
  }

  ngOnInit(): void {
  }

  loadCities() {
    var allCities = ['Agra', 'Bombay', 'Delhi', 'Pune', 'Mumbai'];
    this.cities = allCities.map(function (city) {
      return {
        value: city,
        display: city
      }
    })
  }

  searchBus() {
    let selectedData = new RouteData(this.from, this.to, this.date);
    this.busBookingService.selected = selectedData;
  }

}
