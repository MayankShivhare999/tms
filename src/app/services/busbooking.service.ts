import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusbookingService {

  constructor() { }

  selected:any;

  busSelected:any;

  set setSelected(selected) {
    this.selected = selected;
  }

  get getSelected() {
    return this.selected;
  }

}
