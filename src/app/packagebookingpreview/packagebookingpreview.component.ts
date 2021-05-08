import { Component, OnInit } from '@angular/core';
import { Hotel } from '../model/Hotel';
import { Package } from '../model/Package';
import { HotelService } from '../services/hotel.service';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-packagebookingpreview',
  templateUrl: './packagebookingpreview.component.html',
  styleUrls: ['./packagebookingpreview.component.css']
})
export class PackagebookingpreviewComponent implements OnInit {

  package:Package=new Package();
  hotel:Hotel=new Hotel();
  noOfCustomer: any = 1;
  totalamt: number;
  plannedDate:Date;

  constructor(private packageService:PackageService, private hotelService:HotelService) {
    console.log(this.packageService.selectedHotelId+" "+this.packageService.selectedPackageId);
    this.getPackageById(this.packageService.selectedPackageId);
    this.getHotelById(this.packageService.selectedHotelId);
   }

  ngOnInit(): void {
  }

  getPackageById(id:number) {
    this.packageService.getPackageById(id).subscribe(
      data => {
        this.package = data;
        this.totalamt = this.package.price;
        // this.totalamt = this.package.price;
        // console.log(this.package);
        
      }
    )
  }

  getHotelById(id: number) {
    return this.hotelService.getHotelById(id).subscribe(
      data => {
        this.hotel = data;
        // console.log(this.hotel);
        
      },
      error => {
        console.log(error);
      }
    )
  }

  onDecrement() {
    if (this.noOfCustomer != 1) {
      this.noOfCustomer--;
      const temp = this.hotel.rent;
      this.totalamt = this.totalamt - this.hotel.rent;
    }
  }

  // Caclulate the Total Amount if No. of Customer Deccreases
  onIncrement() {
    if (this.noOfCustomer < 10) {
      this.noOfCustomer++;
      const temp = this.hotel.rent;
      this.totalamt = this.totalamt + this.hotel.rent;
    }
  }

}
