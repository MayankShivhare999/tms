import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {

  constructor() { }

  today = new Date();

  bookingsrc = "";
  

  ngOnInit(): void {
    setInterval(() => {
      this.today = new Date();
      }, 1000);
  }

  


}
