import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LearningService } from './../learning.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {
  public qrdata: string ='ss';
  user_datas : object;

  constructor(private learning_service : LearningService,
        private cookieService: CookieService
	) {this.qrdata = 'sddssd'; }

  ngOnInit() {
  	if(this.cookieService.get('name') && this.cookieService.get('name')){
      let name:any = {"name":this.cookieService.get('name')};
      this.learning_service.getUserDetailsQR(name)
		  .subscribe( user_data => {
	    	this.user_datas = user_data.data[0];
	    	this.qrdata = 'Username : '+user_data.data[0].name+'\n';
	    	this.qrdata +='Email : '+user_data.data[0].email+'\n';
	    	this.qrdata +='Mobile No. : '+user_data.data[0].mobile+'\n';
	    	if(user_data.data[0].is_google_user == '0'){
	    		user_data.data[0].is_google_user = 'No';
	    	}else{
	    		user_data.data[0].is_google_user = 'Yes';
	    	}
	    	this.qrdata +='Google User : '+user_data.data[0].is_google_user+'\n';
	  	})
    }else{
      this.user_datas = [];
      this.qrdata = '';
    }
  }

}
