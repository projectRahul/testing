import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ihome } from './../Ihome';
import { HomeService } from './../home.service';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.css']
})
export class AddMedicationComponent implements OnInit {

  private readonly notifier: NotifierService;
  addMedForm : FormGroup;

  constructor(private amf: FormBuilder,
  			private router: Router,
  			private home_service : HomeService,
        private notifierService: NotifierService
    ) {
      this.notifier = notifierService;
  }

  ngOnInit() {
  	this.addMedForm = this.amf.group({
  		unique_num: ['',[Validators.required]],
  		drug: ['',[Validators.required]],
  		dose: ['',[Validators.required]],
  		strength: ['',[Validators.required]],
  		report_date: ['',[Validators.required]]
  	});
  }

  onSubmit(){
    this.home_service.addNewMedication(this.addMedForm.value)
      .subscribe( data => {
        console.log(data.status);
      	if(data.status == '1'){
     		  this.notifier.notify( 'success', data.message );
        }else{
        	this.notifier.notify( 'danger', data.message );
        }
    });
  }

}

function convertDateFormat(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth()+1)).slice(-2),
        day  = ("0" + date.getDate()).slice(-2);
    return [ date.getFullYear(), mnth, day ].join("-");
}