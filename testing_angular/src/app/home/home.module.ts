import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';

import {NgxPaginationModule} from 'ngx-pagination';
// import { NgDatepickerModule } from 'ng2-datepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NotifierModule } from 'angular-notifier';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedComponent } from './shared/shared.component';
import { HomeService } from './home.service';
import { PatientTabsComponent } from './patient-tabs/patient-tabs.component';
import { LogoutComponent } from './logout/logout.component';
import { InformationComponent } from './patient-tabs/information/information.component';
import { MedicationComponent } from './patient-tabs/medication/medication.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { CsvComponent } from './csv/csv.component';
import { MedicationAccComponent } from './patient-tabs/medication-acc/medication-acc.component';

import {AccordionModule} from "ngx-accordion";

import { StrupperPipe } from './strupper.pipe';

@NgModule({
  declarations: [
  HomeComponent,
  SharedComponent,
  PatientTabsComponent,
  LogoutComponent,
  InformationComponent,
  MedicationComponent,
  AddPatientComponent,
  CsvComponent,
  MedicationAccComponent,
  StrupperPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxPaginationModule,
    // NgDatepickerModule,
    BsDatepickerModule.forRoot(),
    NotifierModule,
    NgbModule,
    AccordionModule
  ],
  providers: [HomeService],
})
export class HomeModule { }
