import { MaintenanceHistoryService } from './../shared/services/maintenance-history.service';
import { Component, OnInit} from '@angular/core';
import { VehicleService } from '../shared/services/vehicle.service';
import { OwnerService } from '../shared/services/owner.service';
import { Owner } from '../shared/models/owner.model';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html'
})
export class OwnersComponent implements OnInit {

  constructor(public vehicleService: VehicleService, public ownerService: OwnerService, public maintenanceHistoryService: MaintenanceHistoryService) {
  }

  ngOnInit() {
    this.maintenanceHistoryService.refreshList();
    this.ownerService.refreshList();
    this.vehicleService.refreshList();
  }

  populateForm(selectedRecord:Owner){
    this.ownerService.formData = Object.assign({},selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?'))
    this.ownerService.deleteOwner(id)
    .subscribe({
      next: res => {
        this.ownerService.list = res as Owner[]
        this.ownerService.refreshList();
      },
      error: err => { console.log(err)
      alert('You cannot delete the owner. They have associated vehicles.');
      }
    })

  }

}
