import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouteData } from '../model/RouteData';
import { Station } from '../model/Station';
import { BusbookingService } from '../services/busbooking.service';
import { RouteService } from '../services/route.service';

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
  stations:Station[];
  cities:any;
  //  :string[] = ['Agra','Bombay', 'Delhi', 'Pune', 'Mumbai'];


  constructor(private busBookingService: BusbookingService, private datepipe: DatePipe, private routeService: RouteService) {
    let todayDate = new Date();
    this.today = this.datepipe.transform(todayDate, 'yyyy-MM-dd');
    // this.loadCities();
    this.getAllStations();
  }

  ngOnInit(): void {
  }

  loadCities(val:string) {
   this.cities = this.stations.filter((s) =>
    new RegExp(val, 'gi').test(s.name));
  }

  searchBus() {
    let selectedData = new RouteData(this.from, this.to, this.date);
    this.busBookingService.selected = selectedData;
  }


  getAllStations() {
    this.routeService.getAllRoute().subscribe (
      data => {
        this.stations = data;
      }
    )
  }

}
