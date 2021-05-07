import { Component, OnInit } from '@angular/core';
import { RouteData } from '../routedetail/routedetail.component';
import { BusbookingService } from '../services/busbooking.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-busview',
  templateUrl: './busview.component.html',
  styleUrls: ['./busview.component.css']
})
export class BusviewComponent implements OnInit {

  constructor(private busBookingService: BusbookingService, private routeService: RouteService) { }

  // selectedData : RouteData = undefined;

  from: string;
  to: String;
  date: Date;
  displayedColumns: string[] = ['name', 'dep', 'dur', 'arr', 'fair', 'rating', 'seats'];
  //dataSource = ELEMENT_DATA;
  dataSource = BUS_DATA;

  mydata: any = ""

  route: MyRoute;

  Buses: any

  dep
  duration
  arr
  fare
  rating
  available


  ngOnInit(): void {
    let selectedData = this.busBookingService.selected;

    this.from = selectedData.from;
    this.to = selectedData.to;
    this.date = selectedData.date;
    this.getRoute(this.from, this.to);
  }

  getRoute(from, to) {
    this.routeService.getRoute(from, to).subscribe(
      data => {
        this.mydata = data;
        console.log(this.mydata);
        // this.BUS =
      }
    ), error => {
      console.log(error);

    }
  }

  onBooking(id) {
    console.log(id);
    this.busBookingService.busSelected = id;
  }

  getAllBuses() {

  }

  // getHotles() {​​​​​​​​
  //   this.service.getAllHotels().subscribe(
  //   data=> {​​​​​​​​ this.hotels = data }​​​​​​​​,
  //   error=> {​​​​​​​​
  //   this.hotels = [];
  //   console.log('Error Occured')
  //   console.log(error);
  //         }​​​​​​​​
  //       );
  //     }​​​​​​​​

}


export interface Bus {
  id
  name
  dep
  dur
  arr
  fair
  rating
  seats
}

export interface MyRoute {
  buses: Bus[]
  from
  to
  id
}

export class BusData {
  busname
  dep
  dur
  arr
  fare
  rating
}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
// export interface Bus {
//   name: string;
//   dep: string;
//   dur: string;
//   arr: string;
//   fair: number;
//   rating: number;
//   seats: number;
// }

const BUS_DATA = [
  { name: 'Kamayni', dep: '12:00', dur: '2H 00m', arr: '14:00', fair: 350, rating: 4.2, seats: 32 },
  { name: 'Rajasthan Parivahan', dep: '12:00', dur: '2H 00m', arr: '14:00', fair: 350, rating: 4.2, seats: 32 },
  { name: 'Chartered', dep: '12:00', dur: '2H 00m', arr: '14:00', fair: 350, rating: 4.2, seats: 32 },
  { name: 'Sky Bus', dep: '12:00', dur: '2H 00m', arr: '14:00', fair: 350, rating: 4.2, seats: 32 },
  { name: 'Verma Travels', dep: '12:00', dur: '2H 00m', arr: '14:00', fair: 350, rating: 4.2, seats: 32 },

];



// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
