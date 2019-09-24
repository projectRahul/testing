import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ihome } from './../../Ihome';
import { HomeService } from './../../home.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {
  pageOfItems: number;
  p: number = 1;

  editMedForm : FormGroup;

  patient_medication_data : any; 
  dropdown_data : any; 
  unique_no_patient:any = {"unique_num":this.cookieService.get('unique_num')};

  constructor(private emf: FormBuilder,
        private router:Router,
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
    
    this.editMedForm = this.emf.group({
      _id: [''],
      drug: ['',[Validators.required]],
      dose: ['',[Validators.required]],
      strength: ['',[Validators.required]],
      report_date: ['',[Validators.required]]
    });


  	if(this.cookieService.get('unique_num') !='0' && this.cookieService.get('unique_num')){
      this.spinner.show();
      this.home_service.getPatientMedicationDetails(this.unique_no_patient)
		  .subscribe( medication_data => {
		    // console.log(medication_data);
		    if (medication_data.status) {
		    	this.patient_medication_data = medication_data.data;
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

  setEditFormValue(drug,dose,strength,report_date,_id){
    this.editMedForm.patchValue({
      drug: drug,
      dose: dose,
      strength: strength,
      report_date: report_date,
      _id: _id,
    });
  }

  pageChange(pageOfItems: number) {
    this.p = pageOfItems;
  }

  drugDropdownOnChange(event: any){
    this.spinner.show();
    let dropdown_filter:any ='';
    if(event.target.value == ''){
      dropdown_filter = {"unique_num":this.cookieService.get('unique_num')};
    }else{
      dropdown_filter = {"unique_num":this.cookieService.get('unique_num'),'drug':event.target.value};
    }
    this.home_service.getPatientMedicationDetails(dropdown_filter)
    .subscribe( medication_data => {
      if (medication_data.status) {
        this.patient_medication_data = medication_data.data;
        this.spinner.hide();
       }else{
         this.patient_medication_data = '';
        this.spinner.hide();
       }
    })
  }

  updateMedRecord(){
    this.home_service.updateMedRecord(this.editMedForm.value)
      .subscribe( data => {
        this.router.navigate(['./home/patienttabs/medication']);
    });

  }
}
