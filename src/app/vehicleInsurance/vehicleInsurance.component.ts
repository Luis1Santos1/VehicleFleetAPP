import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../shared/services/vehicle.service';
import { OwnerService } from '../shared/services/owner.service';
import { VehicleInsuranceService } from '../shared/services/vehicle-insurance.service';
import { VehicleInsurance } from '../shared/models/vehicle-insurance.model';

@Component({
  selector: 'app-vehicleInsurance',
  templateUrl: './vehicleInsurance.component.html'
})
export class VehicleInsuranceComponent implements OnInit{

  constructor(public vehicleService: VehicleService, public ownerService: OwnerService, public vehicleInsuranceService: VehicleInsuranceService) {
  }

  ngOnInit() {
    this.vehicleService.refreshList();
    this.ownerService.refreshList();
    this.vehicleService.refreshList();
    this.vehicleInsuranceService.refreshList();
  }

  getVehicleModel(vehicleId: number | null): string {
    if (vehicleId === null) {
      return 'Unknown Model';
    }
    const vehicle = this.vehicleService.list.find(v => v.id === vehicleId);
    return vehicle ? vehicle.model : '';
  }

  populateForm(selectedRecord:VehicleInsurance){
    this.vehicleInsuranceService.formData = Object.assign({},selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?'))
    this.vehicleInsuranceService.deleteVehicleInsurance(id)
    .subscribe({
      next: res => {
        this.vehicleInsuranceService.list = res as VehicleInsurance[]
        this.vehicleInsuranceService.refreshList();

      },
      error: err => { console.log(err) }
    })
  }

}
