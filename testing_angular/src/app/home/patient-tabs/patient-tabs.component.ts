import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-patient-tabs',
  templateUrl: './patient-tabs.component.html',
  styleUrls: ['./patient-tabs.component.css']
})
export class PatientTabsComponent implements OnInit {
  unique_no_patient : string;
	pageName : string;
  constructor(private router: Router,
        private cookieService: CookieService) { 
    
    if(this.cookieService.get('token') !='' && this.cookieService.get('token')){
    	if(this.cookieService.get('unique_num') !='0' && this.cookieService.get('unique_num')){
        this.unique_no_patient = this.cookieService.get('unique_num');
      }else{
        this.router.navigate(['./home']);
      }
    }else{
        this.router.navigate(['./login']);
    }
  }

  ngOnInit() {
    let getActivePageName = this.router.url.split("/");
    this.pageName = getActivePageName[getActivePageName.length - 1];
  }

}
