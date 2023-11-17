import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { VehicleInsurance } from '../models/vehicle-insurance.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VehicleInsuranceService {

  url:string = environment.apiBaseUrl+'/VehicleInsurance'

  list: VehicleInsurance[] = [];
  formData: VehicleInsurance = new VehicleInsurance()
  formSubmitted:boolean = false;
  loading = false;
  constructor(private http:HttpClient) { }

  refreshList(){
    this.loading = true;
    this.list = [];

    this.http.get(this.url)
    .subscribe({
      next: res => {
        this.list = res as VehicleInsurance[]
        this.loading = false;
      },
      error: err => { console.log(err)
      this.loading = false;
      }
    })
  }

  postVehicleInsurance(){
    return this.http.post(this.url, this.formData)
  }

  putVehicleInsurance(){
    return this.http.put(this.url+'/'+this.formData.id, this.formData);
  }

  deleteVehicleInsurance(id:number){
    return this.http.delete(this.url+'/'+ id)
  }

  resetForm(form:NgForm){
    form.form.reset()
    this.formData = new VehicleInsurance()
    this.formSubmitted = false;
  }
}
