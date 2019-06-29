import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  username : string = '';

  constructor(private router:Router,
        private cookieService: CookieService) { 
    if(this.cookieService.get('token')==''){
  		this.router.navigate(['./login']);
  	}else{
  		this.username = this.cookieService.get('name');
      // console.log(this.username);
  	}
  }

  ngOnInit() {
  }

}
