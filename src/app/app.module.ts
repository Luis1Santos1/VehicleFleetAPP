import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { OwnersComponent } from './owners/owners.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { VehicleService } from './shared/services/vehicle.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaintenanceHistoryComponent } from './maintenanceHistory/maintenanceHistory.component';
import { VehicleInsuranceComponent } from './vehicleInsurance/vehicleInsurance.component';
import { VehiclesFormComponent } from './vehicles/vehicles-form/vehicles-form.component';
import { OwnersFormComponent } from './owners/owners-form/owners-form.component';
import { OwnerService } from './shared/services/owner.service';
import { MaintenanceHistoryService } from './shared/services/maintenance-history.service';
import { MaintenanceHistoryFormComponent } from './maintenanceHistory/maintenanceHistory-form/maintenanceHistory-form.component';

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
    VehicleInsuranceComponent
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
    MaintenanceHistoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
