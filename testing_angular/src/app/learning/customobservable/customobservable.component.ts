import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LearningService } from './../learning.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-customobservable',
  templateUrl: './customobservable.component.html',
  styleUrls: ['./customobservable.component.css']
})
export class CustomobservableComponent implements OnInit {
   data : any;
   
  constructor(private learning_service : LearningService,
        private cookieService: CookieService
	) { }

  ngOnInit() {
  	// if(this.cookieService.get('name') && this.cookieService.get('name')){
   //    let name:any = {"name":this.cookieService.get('name')};
   //    console.log(this.learning_service.getUserDetailsQR(name));
   //    this.data = this.learning_service.getUserDetailsQR(name){

   //    };
		 //  // .subscribe( user_data => {
		 //  // 	this.data = user_data;
	  //  //  	console.log(user_data);
	  //  //  })
   //  }else{
    
   //  }
  }
  async getAsyncData() {
  	let name:any = {"name":this.cookieService.get('name')};
    this.data = await this.learning_service.getUserDetailsQR(name).toPromise();
    console.log(this.data);
  }

}
