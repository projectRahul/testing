import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ihome } from './../../IHome';
import { HomeService } from './../../home.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  patient_datas : object;

  constructor(private router:Router,
  			private home_service : HomeService,
        private cookieService: CookieService
  			) { }

  ngOnInit() {
  	
  	if(this.cookieService.get('unique_num') && this.cookieService.get('unique_num')){
      let unique_no_patient:any = {"unique_num":this.cookieService.get('unique_num')};
      this.home_service.getPatientDetails(unique_no_patient)
		  .subscribe( patient_data => {
		    // console.log(patient_data);
		    if (patient_data.status) {
		    	this.patient_datas = patient_data.data[0];
	   		}else{
	   			this.router.navigate(['./home']);
	   		}
	  	})
	   	return false;
    }else{
      this.router.navigate(['./home']);
    }

  }

}
