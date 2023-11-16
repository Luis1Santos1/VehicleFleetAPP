import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { OwnersComponent } from './owners/owners.component';
import { MaintenanceHistoryComponent } from './maintenanceHistory/maintenanceHistory.component';
import { VehicleInsuranceComponent } from './vehicleInsurance/vehicleInsurance.component';
import { VehicleInsuranceFormComponent } from './vehicleInsurance/vehicleInsuranceForm/vehicleInsuranceForm.component';
import { VehiclesFormComponent } from './vehicles/vehicles-form/vehicles-form.component';
import { OwnersFormComponent } from './owners/owners-form/owners-form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'vehicles',component: VehiclesComponent},
  {path: 'vehicles',component: VehiclesFormComponent},
  {path: 'owners', component: OwnersComponent},
  {path: 'owners', component: OwnersFormComponent},
  {path: 'maintenanceHistory', component: MaintenanceHistoryComponent},
  {path: 'vehicleInsurance', component: VehicleInsuranceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
