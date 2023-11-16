import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Vehicle } from '../models/vehicle.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  url:string = environment.apiBaseUrl+'/Vehicle'

  list: Vehicle[] = [];
  formData: Vehicle = new Vehicle()
  formSubmitted:boolean = false;
  constructor(private http:HttpClient) { }

  refreshList(){
    this.list = [];

    this.http.get(this.url)
    .subscribe({
      next: res => {
        this.list = res as Vehicle[]
      },
      error: err => { console.log(err)}
    })
  }

  postVehicle(){
    return this.http.post(this.url, this.formData)
  }

  putVehicle(){
    return this.http.put(this.url+'/'+this.formData.id, this.formData);
  }

  deleteVehicle(id:number){
    return this.http.delete(this.url+'/'+ id)
  }

  resetForm(form:NgForm){
    form.form.reset()
    this.formData = new Vehicle()
    this.formSubmitted = false;
  }
}
