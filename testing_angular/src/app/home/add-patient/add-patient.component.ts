import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ihome } from './../IHome';
import { HomeService } from './../home.service';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  
  private readonly notifier: NotifierService;
  addPatientForm : FormGroup;
  inputText : string ='';
  selectedFile : File = null;

  constructor(private apf: FormBuilder,
  			private router: Router,
  			private home_service : HomeService,
        private notifierService: NotifierService) 
  {
      this.notifier = notifierService;
  }

  ngOnInit() {
  	this.addPatientForm = this.apf.group({
  		unique_num: ['',[Validators.required]],
  		name: ['',[Validators.required]],
  		email: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
  		mobile: ['',Validators.compose([Validators.required,Validators.pattern('[1-9]{1}[0-9]{9}')])],
  		address: ['',[Validators.required]],
      dob: ['',[Validators.required]],
  		image: [''],
  	});
  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
    const file = event.target.files[0];
    this.addPatientForm.get('image').setValue(file);
  }

  onSubmit(){
    const fd = new FormData();
    fd.append('image', this.addPatientForm.get('image').value);
    fd.append('dob', convertDateFormat(this.addPatientForm.get('dob').value));
    fd.append('unique_num', this.addPatientForm.get('unique_num').value);
    fd.append('name', this.addPatientForm.get('name').value);
    fd.append('email', this.addPatientForm.get('email').value);
    fd.append('mobile', this.addPatientForm.get('mobile').value);
    fd.append('address', this.addPatientForm.get('address').value);

    this.home_service.addNewPatient(<any>fd)
      .subscribe( data => {
        console.log(data.status);
      	if(data.status == '1'){
     		  this.notifier.notify( 'success', 'Patient Added Successfully' );
        }else{
        	this.notifier.notify( 'danger', 'Patient Already Exists' );
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