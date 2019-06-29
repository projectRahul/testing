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


const routes: Routes = [
	// {path: 'home', component : HomeComponent},
	{path: 'home/patienttabs', component : PatientTabsComponent},
	{path: 'home/csv', component : CsvComponent},
	{path: 'home/add-patient', component : AddPatientComponent},
	{path: 'home/logout', component : LogoutComponent},
	{path: 'home/patienttabs/information', component : InformationComponent},
	{path: 'home/patienttabs/medication', component : MedicationComponent},
	{path: 'home/patienttabs/medicationacc', component : MedicationAccComponent},
	// {path: 'change_image', component : ChangeImageComponent},
	{path: 'home', redirectTo : 'home', pathMatch: 'full'},
	{path : '**',component : PageNotFoundComponent}

];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
