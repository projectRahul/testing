import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from '../pnf/page-not-found.component';

import { PatientTabsComponent } from './patient-tabs/patient-tabs.component';
import { InformationComponent } from './patient-tabs/information/information.component';
import { MedicationComponent } from './patient-tabs/medication/medication.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { CsvComponent } from './csv/csv.component';
import { MedicationAccComponent } from './patient-tabs/medication-acc/medication-acc.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PaygatewayComponent } from './paygateway/paygateway.component';


const routes: Routes = [
	{
		path : 'home' , children : [
			{path: 'patienttabs', component : PatientTabsComponent},
			{path: 'csv', component : CsvComponent},
			{path: 'add-patient', component : AddPatientComponent},
			{path: 'logout', component : LogoutComponent},
			{path: 'patienttabs/information', component : InformationComponent},
			{path: 'patienttabs/medication', component : MedicationComponent},
			{path: 'patienttabs/medicationacc', component : MedicationAccComponent},
			{path: 'gallery', component : GalleryComponent},
			{path: 'paymentgateway', component : PaygatewayComponent},
			{path: 'home', redirectTo : 'home', pathMatch: 'full'},
			{path : '**',component : PageNotFoundComponent}
		]
	}
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
