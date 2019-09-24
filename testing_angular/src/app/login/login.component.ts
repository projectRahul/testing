import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Iuser } from '../Iuser';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

import { CookieService } from 'ngx-cookie-service';
import {AuthService,GoogleLoginProvider} from 'angular-6-social-login';

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
    private cookieService: CookieService,
    private socialAuthService: AuthService) { 
      this.notifier = notifierService;
  }

public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    // if(socialPlatform == "facebook"){
    //   socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    // }else
     if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 
    // else if (socialPlatform == "linkedin") {
    //   socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    // }
    let google_records:any;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        // console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
        google_records = {"name":userData.name,"email":userData.email,"is_google_user":'1'};
        this.user_service.loginUser(google_records)
          .subscribe( data => {
            // console.log(data);
            if(!isEmpty(data) && data[0]){
              this.cookieService.set( 'token', data[1]['token'],0.25);
              this.cookieService.set( 'name', data[0]['name'],0.25);
              this.router.navigate(['./home']);
            }else{
              this.notifier.notify( 'success', 'Wrong Credentials' );
            }
        });
      }
    );
  }


  ngOnInit() {
  	this.loginForm = this.lf.group({
  		email: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
  		password: ['',[Validators.required]],
  	});
  }

  onSubmit(){
    this.loginForm.value.is_google_user = 0;
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


// IIFE - Immediately invoked function expression (calls itself right after being initialized)
class Foo {
    foo: string = (function bar(){
        console.log("testing IIFE");
        return "value";
    }());
};

new Foo();