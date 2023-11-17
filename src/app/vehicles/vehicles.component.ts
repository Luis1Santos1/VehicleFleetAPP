import { MaintenanceHistory } from 'src/app/shared/models/maintenance-history.model';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../shared/services/vehicle.service';
import { OwnerService } from '../shared/services/owner.service';
import { Vehicle } from '../shared/models/vehicle.model';
import { MaintenanceHistoryService } from '../shared/services/maintenance-history.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html'
})
export class VehiclesComponent implements OnInit {

  constructor(public vehicleService: VehicleService, public ownerService: OwnerService, public maintenanceHistoryService: MaintenanceHistoryService) {
  }

  ngOnInit() {
    this.maintenanceHistoryService.refreshList();
    this.ownerService.refreshList();
    this.vehicleService.refreshList();
  }

  populateForm(selectedRecord:Vehicle){
    this.vehicleService.formData = Object.assign({},selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?'))
    this.vehicleService.deleteVehicle(id)
    .subscribe({
      next: res => {
        this.vehicleService.list = res as Vehicle[]
        this.vehicleService.refreshList();

      },
      error: err => { console.log(err) }
    })
  }

}
