import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { VehicleService } from './shared/services/vehicle.service';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehiclesFormComponent } from './vehicles/vehicles-form/vehicles-form.component';
import { OwnerService } from './shared/services/owner.service';
import { OwnersComponent } from './owners/owners.component';
import { OwnersFormComponent } from './owners/owners-form/owners-form.component';
import { MaintenanceHistoryService } from './shared/services/maintenance-history.service';
import { MaintenanceHistoryComponent } from './maintenanceHistory/maintenanceHistory.component';
import { MaintenanceHistoryFormComponent } from './maintenanceHistory/maintenanceHistory-form/maintenanceHistory-form.component';
import { VehicleInsuranceService } from './shared/services/vehicle-insurance.service';
import { VehicleInsuranceComponent } from './vehicleInsurance/vehicleInsurance.component';
import { VehicleInsuranceFormComponent } from './vehicleInsurance/vehicleInsuranceForm/vehicleInsuranceForm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    OwnersComponent,
    OwnersFormComponent,
    VehiclesComponent,
    VehiclesFormComponent,
    MaintenanceHistoryComponent,
    MaintenanceHistoryFormComponent,
    VehicleInsuranceComponent,
    VehicleInsuranceFormComponent
   ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    VehicleService,
    OwnerService,
    MaintenanceHistoryService,
    VehicleInsuranceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
