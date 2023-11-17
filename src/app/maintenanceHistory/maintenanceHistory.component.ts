import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../shared/services/vehicle.service';
import { OwnerService } from '../shared/services/owner.service';
import { MaintenanceHistoryService } from '../shared/services/maintenance-history.service';
import { MaintenanceHistory } from '../shared/models/maintenance-history.model';

@Component({
  selector: 'app-maintenanceHistory',
  templateUrl: './maintenanceHistory.component.html'
})
export class MaintenanceHistoryComponent implements OnInit {

  constructor(public vehicleService: VehicleService, public ownerService: OwnerService, public maintenanceHistoryService: MaintenanceHistoryService) {
  }

  ngOnInit() {
    this.maintenanceHistoryService.refreshList();
    this.ownerService.refreshList();
    this.vehicleService.refreshList();
  }

  getVehicleModel(vehicleId: number | null): string {
    if (vehicleId === null) {
      return 'Unknown Model';
    }
    const vehicle = this.vehicleService.list.find(v => v.id === vehicleId);
    return vehicle ? vehicle.model : '';
  }

  populateForm(selectedRecord:MaintenanceHistory){
    this.maintenanceHistoryService.formData = Object.assign({},selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?'))
    this.maintenanceHistoryService.deleteMaintenanceHistory(id)
    .subscribe({
      next: res => {
        this.maintenanceHistoryService.list = res as MaintenanceHistory[]
        this.maintenanceHistoryService.refreshList();
      },
      error: err => { console.log(err)
      alert('Não é possível excluir o proprietário. Ele possui veículos associados.');
      }
    })
  }
}
