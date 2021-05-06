import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-routedetail',
  templateUrl: './routedetail.component.html',
  styleUrls: ['./routedetail.component.css']
})
export class RoutedetailComponent implements OnInit {

  constructor() { 
    this.loadCities();
  }

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
    // allCities.split(/, +/g).map( function (city) {
    //    return {
    //       value: city.toUpperCase(),
    //       display: city
    //    };
    // });
 }

}
