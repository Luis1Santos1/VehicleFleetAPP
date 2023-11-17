import { NgForm } from '@angular/forms';
import { MaintenanceHistoryService } from './../../shared/services/maintenance-history.service';
import { Component, OnInit } from '@angular/core';
import { MaintenanceHistory } from 'src/app/shared/models/maintenance-history.model';
import { VehicleService } from 'src/app/shared/services/vehicle.service';


@Component({
  selector: 'app-maintenanceHistory-form',
  templateUrl: './maintenanceHistory-form.component.html'
})
export class MaintenanceHistoryFormComponent{

  constructor(public maintenanceHistoryService: MaintenanceHistoryService, public vehicleService: VehicleService) {
  }

  fieldInvalid(field: any): boolean {
    return (field.control.touched || field.control.dirty) && field.invalid;
  }

  checkField(field: any) {
    field.control.markAsTouched();
  }

  maintenanceDateInvalid(maintenanceDate: any): boolean {
    return (maintenanceDate.control.touched || maintenanceDate.control.dirty) && maintenanceDate.invalid;
  }

  serviceTypeInvalid(serviceType: any): boolean {
    return (serviceType.control.touched || serviceType.control.dirty) && serviceType.invalid;
  }

  costInvalid(cost: any): boolean {
    return (cost.control.touched || cost.control.dirty) && cost.invalid;
  }

  onSubmit(form:NgForm){
    console.log('ID antes da verificação:', this.maintenanceHistoryService.formData.id);
    this.maintenanceHistoryService.formSubmitted = true
    if(form.valid){
      if(this.maintenanceHistoryService.formData.id == 0)
        this.insertRecord(form)
      else
        this.updateRecord(form)
      }
  }
  insertRecord(form: NgForm){
    this.maintenanceHistoryService.postMaintenanceHistory()
    .subscribe({
      next: res => {
        this.maintenanceHistoryService.list = res as MaintenanceHistory[]
        this.maintenanceHistoryService.resetForm(form);
        this.maintenanceHistoryService.refreshList();
      },
      error: err => { console.log(err) }
    });
  }
  updateRecord(form: NgForm){
    this.maintenanceHistoryService.putMaintenanceHistory()
    .subscribe({
      next: res => {
        this.maintenanceHistoryService.list = res as MaintenanceHistory[]
        this.maintenanceHistoryService.resetForm(form);
        this.maintenanceHistoryService.refreshList();
      },
      error: err => { console.log(err) }
    })
  }


}
