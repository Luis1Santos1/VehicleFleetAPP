import { NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Owner } from '../models/owner.model';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  url:string = environment.apiBaseUrl+'/Owner'
  list: Owner[] = [];
  formData: Owner = new Owner()
  formSubmitted:boolean = false;
  loading = false;
  constructor(private http:HttpClient) { }

  refreshList(){
    this.loading = true;
    this.list = [];

    this.http.get(this.url)
    .subscribe({
      next: res => {
        this.list = res as Owner[]
        this.loading = false;
      },
      error: err => { console.log(err)
      this.loading = false;
      }
    })
  }

  getVehiclesByOwnerId(ownerId: number) {
    const url = `${this.url}/${ownerId}/vehicles`;

    return this.http.get<Owner[]>(url);
  }

  postOwner(){
    return this.http.post(this.url, this.formData)
  }

  putOwner(){
    return this.http.put(this.url+'/'+this.formData.id, this.formData);
  }

  deleteOwner(id:number){
    return this.http.delete(this.url+'/'+ id)
  }

  resetForm(form:NgForm){
    form.form.reset()
    this.formData = new Owner()
    this.formSubmitted = false;
  }
}
