import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hotel } from '../model/Hotel';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotelmanage',
  templateUrl: './hotelmanage.component.html',
  styleUrls: ['./hotelmanage.component.css']
})
export class HotelmanageComponent implements OnInit {

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.getHotels();
    this.isupdated = false;
  }

  isupdated = false;
  message: string = '';
  deleteMessage: boolean = false;
  isSaved: boolean = false;
  name: String = ''
  address: String = ''
  description: String = ''
  rent: number = 0
  hotel: Hotel = new Hotel();
  hotels: Hotel[] = [];
  hotelList: any;

  saveHotel = new FormGroup({
    hname: new FormControl(''),
    haddress: new FormControl(''),
    hdescription: new FormControl(''),
    hrent: new FormControl()
  }
  );

  hotelupdateform = new FormGroup({
    uid: new FormControl(),
    uname: new FormControl(),
    uaddress: new FormControl(),
    udescription: new FormControl(),
    urent: new FormControl()
  });

  //getters
  get hotelName() {
    return this.saveHotel.get('hname')
  }

  get hotelAddress() {
    return this.saveHotel.get('haddress')
  }
  get hotelDescription() {
    return this.saveHotel.get('hdescription')
  }

  get hotelRent() {
    return this.saveHotel.get('hrent')
  }

  get updateHotelId() {
    return this.hotelupdateform.get('uid')
  }
  get updateHotelName() {
    return this.hotelupdateform.get('uname')
  }
  get updateHotelAddress() {
    return this.hotelupdateform.get('uaddress')
  }
  get updateHotelDescription() {
    return this.hotelupdateform.get('udescription')
  }
  get updateHotelRent() {
    return this.hotelupdateform.get('urent')
  }

  addHotel() {
    this.hotel = new Hotel();
    this.hotel.name = this.hotelName.value;
    this.hotel.address = this.hotelAddress.value;
    this.hotel.description = this.hotelDescription.value;
    this.hotel.rent = this.hotelRent.value;

    this.hotelService.addHotel(this.hotel).subscribe(
      data => {
        console.log(data);
        this.getHotels();
      },
      error => console.log(error));
    this.isSaved = true;
    this.name = '';
    this.address = '';
    this.description = '';
    this.rent = 0;
    this.hotel = new Hotel();
  }


  getHotels() {
    this.hotelService.getAllHotels().subscribe(
      data => this.hotels = data,
      error => {
        this.hotels = [];
        console.log(error);
      }
    );
  }

  getHotel(id: number) {
    this.hotelService.getHotelById(id).subscribe(
      data => this.hotel = data,
      error => console.log(error)
    );
  }

  updateHotelDetails() {
    this.hotel = new Hotel();
    this.hotel.id = this.updateHotelId.value;
    this.hotel.name = this.updateHotelName.value;
    this.hotel.address = this.updateHotelAddress.value;
    this.hotel.description = this.updateHotelDescription.value;
    this.hotel.rent = this.updateHotelRent.value;
    this.hotelService.updateHotel(this.hotel).subscribe(
      data => {
        console.log(data);
        this.getHotels();
        this.isupdated = true;
      },
      error => console.log(error));
  }

  deleteHotel(id: number) {
    this.hotelService.deleteHotel(id).subscribe(
      data => {
        this.message = data;
        this.deleteMessage = true;
        this.getHotels();
      },
      error => console.log(error));
  }

  changeisUpdate() {
    this.isupdated = false;
  }
}
