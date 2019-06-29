import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Iuser } from '../Iuser';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  private readonly notifier: NotifierService;
  
  constructor(private lf: FormBuilder,
    private user_service : UserService,
    private router: Router,
    private notifierService: NotifierService,
    private cookieService: CookieService) { 
      this.notifier = notifierService;
  }

  ngOnInit() {
  	this.loginForm = this.lf.group({
  		email: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
  		password: ['',[Validators.required]],
  	});
  }

  onSubmit(){
    this.user_service.loginUser(this.loginForm.value)
      .subscribe( data => {
        // console.log(data);
      	if(!isEmpty(data) && data[0]){
          this.cookieService.set( 'token', data[1]['token'],0.25);
          this.cookieService.set( 'name', data[0]['name'],0.25);
     		  this.router.navigate(['./home']);
        }else{
        	this.notifier.notify( 'danger', 'Wrong Credentials' );
        }
    });
  }
}


function isEmpty(obj) {
  for(var key in obj) {
    if(obj.hasOwnProperty(key))
      return false;
  }
  return true;
}