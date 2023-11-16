import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Vehicle } from 'src/app/shared/models/vehicle.model';
import { OwnerService } from 'src/app/shared/services/owner.service';
import { VehicleService } from 'src/app/shared/services/vehicle.service';

@Component({
  selector: 'app-vehicles-form',
  templateUrl: './vehicles-form.component.html'
})
export class VehiclesFormComponent {

  fieldInvalid(field: any): boolean {
    return (field.control.touched || field.control.dirty) && field.invalid;
  }

  checkField(field: any) {
    field.control.markAsTouched();
  }

  updateManufacturingYear(value: any) {
    this.vehicleService.formData.manufacturingYear = +value;
  }


  constructor(public vehicleService: VehicleService, public ownerService: OwnerService) {
  }

  onSubmit(form:NgForm){
    console.log('ID antes da verificação:', this.vehicleService.formData.id);
    this.vehicleService.formSubmitted = true
    if(form.valid){
      if(this.vehicleService.formData.id == 0)
        this.insertRecord(form)
      else
        this.updateRecord(form)
      }
  }
  insertRecord(form: NgForm){
    this.vehicleService.postVehicle()
    .subscribe({
      next: res => {
        this.vehicleService.list = res as Vehicle[]
        this.vehicleService.resetForm(form);
        this.vehicleService.refreshList();
      },
      error: err => { console.log(err) }
    })
  }
  updateRecord(form: NgForm){
    this.vehicleService.putVehicle()
    .subscribe({
      next: res => {
        this.vehicleService.list = res as Vehicle[]
        this.vehicleService.resetForm(form);
        this.vehicleService.refreshList();

      },
      error: err => { console.log(err) }
    })
  }
}

function manufacturingYearValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const year = control.value;
    if (year && (year < 1900 || year > 2100)) {
      return { manufacturingYearInvalid: true };
    }
    return null;
  };
}
