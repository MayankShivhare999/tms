import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Bus } from '../model/Bus';
import { BusService } from '../services/bus.service';

declare let $: any;

@Component({
  selector: 'app-busmanage',
  templateUrl: './busmanage.component.html',
  styleUrls: ['./busmanage.component.css']
})
export class BusmanageComponent implements OnInit {

  busnum: string = '';
  currentEmptySeat: number;
  driver: string = '';
  conductor: string = '';
  dept: string = '';
  arr: string = '';
  amount: number;

  buses: Bus[] = [];
  bus: Bus = new Bus();
  isupdated: boolean = false; 
  saveBus: FormGroup

  constructor(private busService: BusService, private formBuilder: FormBuilder) { 
    this.saveBus = this.formBuilder.group({ 
      bnumber:['', Validators.required],
      busdriver:['', Validators.required],
      busconductor: ['', Validators.required],
      busdept: ['', Validators.required],
      busarr: ['', Validators.required],
      busamt: ['', Validators.required],
      busseat: ['', Validators.required]
    });
    this.getBuses();
  }

  ngOnInit(): void {
    
    this.isupdated=false;
  }

  busupdateform = new FormGroup({
    updateid: new FormControl(),
    updatenumber: new FormControl(),
    updatedriver: new FormControl(),
    updateconductor: new FormControl(),
    updatedept: new FormControl(),
    updatearr: new FormControl(),
    updateamt: new FormControl(),
    updateseat: new FormControl()
  });

  addNewBus(){
    $("#addBusModel").modal("show");
  }

  addBus() {
    this.bus = new Bus();
    this.bus.busNumber = this.saveBus.get('bnumber').value;
    this.bus.driver = this.saveBus.get('busdriver').value;
    this.bus.conductor = this.saveBus.get('busconductor').value;
    this.bus.dep = this.saveBus.get('busdept').value;
    this.bus.arr = this.saveBus.get('busarr').value;
    this.bus.amount = this.saveBus.get('busamt').value;
    this.bus.currentEmptySeat = this.saveBus.get('busseat').value;
    
    this.busService.addBus(this.bus).subscribe(
      data => {
        console.log(data);
        this.busnum = '';
        this.currentEmptySeat = 0;
        this.driver = '';
        this.conductor = '';
        this.dept = '';
        this.arr = '';
        this.amount = 0;
        this.bus = new Bus();    
      });

      this.busService.getAllBus().subscribe(
        data => {
          this.buses = data;
          $("#addBusModel").modal("hide");
          //sweetalert message popup
          Swal.fire({
            title: 'Completed',
            text:   "Bus has been added successfully",
            icon: 'success'
          });  
          //Destroy old datatable for getting new latest data
          $('#busDataTable').DataTable().destroy();
          //get user details sevice and show inside datatable
          this.busService.getAllBus().subscribe(
          busData => {
            this.buses = busData;
            setTimeout(()=>{$('#busDataTable').DataTable()}, 500);
          });
        },
        error => console.log(error));
}

  getBuses() {
    this.busService.getAllBus().subscribe(
      data => this.buses = data,
      error => {
        this.buses = [];
        console.log(error)
      });
  }

  getBus(id: number){
    this.busService.getBusById(id).subscribe(
      data=> this.bus = data,
      error => {
        console.log(error)
      });
  }

  updateBusDetails(){
    this.bus = new Bus();
    this.bus.id = this.busupdateform.get('updateid').value;
    this.bus.busNumber = this.busupdateform.get('updatenumber').value;
    this.bus.driver = this.busupdateform.get('updatedriver').value;
    this.bus.conductor = this.busupdateform.get('updateconductor').value;
    this.bus.dep = this.busupdateform.get('updatedept').value;
    this.bus.arr = this.busupdateform.get('updatearr').value;
    this.bus.amount = this.busupdateform.get('updateamt').value;
    this.bus.currentEmptySeat = this.busupdateform.get('updateseat').value;
    this.busService.updateBus(this.bus).subscribe(
      data => {
        console.log(data);
        this.getBuses();
        this.isupdated = true;
      },
      error => console.log(error));
  }

  deleteBus(id:number){
    this.busService.deleteBus(id).subscribe(
      data => console.log("success: " + data),
      error => {
        console.log(error);
        Swal.fire({
          title: 'Something went wrong',
          text:   "Bus not deleted, associated with route",
          icon: 'error'
        });
      });
    
    this.busService.getAllBus().subscribe(
      data => {
        this.buses = data;
        //sweetalert message popup
        Swal.fire({
          title: 'Completed',
          text:   "Bus has been deleted successfully",
              icon: 'success'
            });
          
          //Destroy old datatable for getting new latest data
          $('#busDataTable').DataTable().destroy();
          //get user details sevice and show inside datatable
          this.busService.getAllBus().subscribe(
          busData => {
            this.buses = busData;
            setTimeout(()=>{$('#busDataTable').DataTable()}, 500);
          });
        },
        error => console.log(error));
  }

  changeisUpdate(){
    this.isupdated = false;
  }
}