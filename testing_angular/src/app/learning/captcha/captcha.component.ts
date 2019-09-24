import { Component, OnInit } from '@angular/core';
//Run on 127.0.0.1
@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {
  
  show_message : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  resolved(captchaResponse: string) {
    if(captchaResponse != null){
    	console.log(`Resolved captcha with response: ${captchaResponse}`);
    	this.show_message = true;
    }else{
    	this.show_message = false;
    }
  }
}
