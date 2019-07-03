import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ihome } from './Ihome';
import { HomeService } from './home.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	patientForm : FormGroup;
	private readonly notifier: NotifierService;
  constructor(private router: Router,
  			private home_service : HomeService,
  			private notifierService: NotifierService,
  			private cookieService: CookieService
  	) { 
  		this.notifier = notifierService;

  		if(this.cookieService.get('token') =='' || !this.cookieService.get('token')){
	        this.router.navigate(['./login']);    	
	    }
	    this.cookieService.delete('unique_num');
  	}

	ngOnInit() {
		this.patientForm = new FormGroup({
	       search: new FormControl()
	    });
	}

   	showDropdown(){
	   document.getElementById("myDropdown").classList.toggle("show");
  	}

   	searchwith(searchValue: string, searchwith: string){
	   	let patient_search:any = {"searchValue":searchValue,"searchwith":searchwith};
	   	this.home_service.searchPatient(patient_search)
		  .subscribe( patient_data => {
		    // console.log(patient_data.status);
		    if (patient_data.status) {
		    	this.cookieService.set( 'unique_num', patient_data.data[0]['unique_num'],0.25);
		    	this.router.navigate(['./home/patienttabs/information']);
	   		}else{
	   			this.notifier.notify( 'danger', 'No record found');
	   		}
	  	})
	   	return false;
	}
}