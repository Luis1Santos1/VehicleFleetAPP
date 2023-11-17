import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/shared/services/owner.service';
import { VehicleService } from 'src/app/shared/services/vehicle.service';
import { VehicleInsuranceService } from 'src/app/shared/services/vehicle-insurance.service';
import { VehicleInsurance } from 'src/app/shared/models/vehicle-insurance.model';

@Component({
  selector: 'app-vehicleInsuranceForm',
  templateUrl: './vehicleInsuranceForm.component.html'
})
export class VehicleInsuranceFormComponent {

  startDateValue: any;
  endDateValue: any;
  dataerrada: any;

  fieldInvalid(field: any): boolean {
    return (field.control.touched || field.control.dirty) && field.invalid;
  }

  checkField(field: any) {
    field.control.markAsTouched();

    if (field.name === 'startDate') {
      this.startDateValue = field.value;
    } else if (field.name === 'endDate') {
      this.endDateValue = field.value;
    }
  }

  constructor(public vehicleService: VehicleService, public ownerService: OwnerService, public vehicleInsuranceService: VehicleInsuranceService) {
  }

  onSubmit(form:NgForm){
    console.log('ID antes da verificação:', this.vehicleInsuranceService.formData.id);
    this.vehicleInsuranceService.formSubmitted = true
    if(form.valid){
      if(this.vehicleInsuranceService.formData.id == 0)
        this.insertRecord(form)
      else
        this.updateRecord(form)
      }
  }
  insertRecord(form: NgForm){
    this.vehicleInsuranceService.postVehicleInsurance()
    .subscribe({
      next: res => {
        this.vehicleInsuranceService.list = res as VehicleInsurance[]
        this.vehicleInsuranceService.resetForm(form);
        this.vehicleInsuranceService.refreshList();
      },
      error: err => { console.log(err);
        if(this.startDateValue > this.endDateValue){
          alert('The end date must be greater than the start date.');
        }}
    })
  }
  updateRecord(form: NgForm){
    this.vehicleInsuranceService.putVehicleInsurance()
    .subscribe({
      next: res => {
        this.vehicleInsuranceService.list = res as VehicleInsurance[]
        this.vehicleInsuranceService.resetForm(form);
        this.vehicleInsuranceService.refreshList();
      },
      error: err => { console.log(err) ;
        if(this.startDateValue > this.endDateValue){
          alert('The end date must be greater than the start date.');
        }}
    })
  }

}
