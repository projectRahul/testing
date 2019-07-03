import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ihome } from './../../Ihome';
import { HomeService } from './../../home.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CookieService } from 'ngx-cookie-service';

import {AccordionModule} from "ngx-accordion";

@Component({
  selector: 'app-medication-acc',
  templateUrl: './medication-acc.component.html',
  styleUrls: ['./medication-acc.component.css']
})
export class MedicationAccComponent implements OnInit {
  p: number = 1;
  patient_medication_data : any; 
  dropdown_data : any; 
  unique_no_patient:any = {"unique_num":this.cookieService.get('unique_num')};

  constructor(private router:Router,
  			private home_service : HomeService,
        private spinner : NgxSpinnerService,
        private cookieService: CookieService
  			) {
            this.home_service.getDrugDropdown(this.unique_no_patient)
            .subscribe( dropdown_data => {
              if (dropdown_data.status) {
                this.dropdown_data = dropdown_data.data;
               }else{
                 this.dropdown_data = '';
               }
            })
         }

  ngOnInit() {
    
  	if(this.cookieService.get('unique_num') !='0' && this.cookieService.get('unique_num')){
      let unique_no_patient:any = {"unique_num":this.cookieService.get('unique_num')};
      this.spinner.show();
      this.home_service.getPatientMedicationAccDetails(unique_no_patient)
		  .subscribe( medication_data => {
		    if (medication_data.status) {

          let data = [];
          for(let i = 0; i < medication_data.data.length; i++){
              let name = medication_data.data[i].drug;
              if(name in data == false){
                  data[name] = [];
              }
              let k = 0;
              for(let j = 0; j < medication_data.data.length; j++){          
                  if(medication_data.data[j].drug == name){
                    data[name][k] =medication_data.data[j];
                    k++;
                  }
              }
          } 
          var newArray = [];
          var count = 0;
          for (var key in data){
            newArray[count] = data[key];
            count++;
          }
  		    console.log(newArray);
          
		    	this.patient_medication_data = newArray;
          this.spinner.hide();
	   		}else{
	   			this.patient_medication_data = '';
          this.spinner.hide();
	   		}
	  	})
	   	return false;
    }else{
      this.router.navigate(['./home']);
    }

  }

  drugDropdownOnChange(event: any){
    let dropdown_filter:any ='';
    if(event.target.value == ''){
      dropdown_filter = {"unique_num":this.cookieService.get('unique_num')};
    }else{
      dropdown_filter = {"unique_num":this.cookieService.get('unique_num'),'drug':event.target.value};
    }
    this.home_service.getPatientMedicationAccDetails(dropdown_filter)
      .subscribe( medication_data => {
        if (medication_data.status) {

          let data = [];
          for(let i = 0; i < medication_data.data.length; i++){
              let name = medication_data.data[i].drug;
              if(name in data == false){
                  data[name] = [];
              }
              let k = 0;
              for(let j = 0; j < medication_data.data.length; j++){          
                  if(medication_data.data[j].drug == name){
                    data[name][k] =medication_data.data[j];
                    k++;
                  }
              }
          } 
          var newArray = [];
          var count = 0;
          for (var key in data){
            newArray[count] = data[key];
            count++;
          }
          console.log(newArray);
          
          this.patient_medication_data = newArray;
          this.spinner.hide();
         }else{
           this.patient_medication_data = '';
          this.spinner.hide();
         }
    })
  }

}
