import { Injectable } from '@angular/core';
import { BusBooking } from '../model/BusBooking';

@Injectable({
  providedIn: 'root'
})
export class BusbookingService {

  constructor() { }

  selected:any;

  busSelected:any;

  // busSelected:any = 143;
  set setSelected(selected) {
    this.selected = selected;
  }

  get getSelected() {
    return this.selected;
  }

  addBusBooking(busBooking:BusBooking) {
    
  }

}
