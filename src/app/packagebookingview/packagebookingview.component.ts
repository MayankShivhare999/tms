import { Component, OnInit } from '@angular/core';
import { Package } from '../model/Package';
import { PackageService } from '../services/package.service';

@Component({
  selector: 'app-packagebookingview',
  templateUrl: './packagebookingview.component.html',
  styleUrls: ['./packagebookingview.component.css']
})
export class PackagebookingviewComponent implements OnInit {

  package: Package = new Package();
  constructor(private packageService: PackageService) {
    this.getPackageById(this.packageService.selectedPackageId);
  }

  ngOnInit(): void {
  }

  getPackageById(id: number) {
    this.packageService.getPackageById(id).subscribe(
      data => {
        this.package = data;
      }
    )
  }

  onSelectHotel(id: number) {
    this.packageService.selectedHotelId = id;
    console.log(id);
  }
}
