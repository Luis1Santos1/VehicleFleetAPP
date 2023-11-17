import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { MaintenanceHistory } from '../models/maintenance-history.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceHistoryService {

  url:string = environment.apiBaseUrl+'/MaintenanceHistory'
  list: MaintenanceHistory[] = [];
  formData: MaintenanceHistory = new MaintenanceHistory()
  formSubmitted:boolean = false;
  loading = false;
  constructor(private http:HttpClient) { }

  refreshList(){
    this.loading = true;
    this.list = [];

    this.http.get(this.url)
    .subscribe({
      next: res => {
        this.list = res as MaintenanceHistory[]
        this.loading = false;
      },
      error: err => { console.log(err)
      this.loading = false;
      }
    })
  }

  postMaintenanceHistory(){
    return this.http.post(this.url, this.formData)
  }

  putMaintenanceHistory(){
    return this.http.put(this.url+'/'+this.formData.id, this.formData);
  }

  deleteMaintenanceHistory(id:number){
    return this.http.delete(this.url+'/'+ id)
  }

  resetForm(form:NgForm){
    form.form.reset()
    this.formData = new MaintenanceHistory()
    this.formSubmitted = false;
  }
}
