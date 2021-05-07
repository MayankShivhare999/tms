import { Component, OnInit } from '@angular/core';
import { Hotel } from '../model/Hotel';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotelbookingview',
  templateUrl: './hotelbookingview.component.html',
  styleUrls: ['./hotelbookingview.component.css']
})
export class HotelbookingviewComponent implements OnInit {

  constructor(private service:HotelService) { }

  hotel:any;

  noOfCustomer:any = 1;
  ticketfare = 250;
  rent = 250;

  ngOnInit(): void {
    // this.getHotelById(this.service.selectedHotel);
  }


  //  getHotelById(id) {
  //   this.service.getHotelById(id).subscribe(
  //     data => {
  //       this.hotel = data;
  //       return data;
  //     },
  //     error => {
  //       console.log(error);
        
  //     }
  //   )
  // }

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

}
