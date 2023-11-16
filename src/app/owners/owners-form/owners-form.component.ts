import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Owner } from 'src/app/shared/models/owner.model';
import { OwnerService } from 'src/app/shared/services/owner.service';
import { VehicleService } from 'src/app/shared/services/vehicle.service';

@Component({
  selector: 'app-owners-form',
  templateUrl: './owners-form.component.html'
})
export class OwnersFormComponent{

  constructor(public vehicleService: VehicleService, public ownerService: OwnerService) {
  }

  checkField(field: any) {
    field.control.markAsTouched();
  }

  nameInvalid(name: any): boolean {
    return (name.control.touched || name.control.dirty) && name.invalid;
  }

  cpfInvalid(cpf: any): boolean {
    return (cpf.control.touched || cpf.control.dirty) && cpf.invalid;
  }

  addressInvalid(address: any): boolean {
    return (address.control.touched || address.control.dirty) && address.invalid;
  }

  phoneInvalid(phone: any): boolean {
    return (phone.control.touched || phone.control.dirty) && phone.invalid;
  }

  onSubmit(form:NgForm){
    console.log('ID antes da verificação:', this.ownerService.formData.id);
    this.ownerService.formSubmitted = true
    if(form.valid){
      if(this.ownerService.formData.id == 0)
        this.insertRecord(form)
      else
        this.updateRecord(form)
      }
  }
  insertRecord(form: NgForm){
    this.ownerService.postOwner()
    .subscribe({
      next: res => {
        this.ownerService.list = res as Owner[]
        this.ownerService.resetForm(form);
        this.ownerService.refreshList();
      },
      error: err => { console.log(err) }
    });
  }
  updateRecord(form: NgForm){
    this.ownerService.putOwner()
    .subscribe({
      next: res => {
        this.ownerService.list = res as Owner[]
        this.ownerService.resetForm(form);
        this.ownerService.refreshList();
      },
      error: err => { console.log(err) }
    })
  }

}
