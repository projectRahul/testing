import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  username : string = '';
  progressWidth : string = '0%';
  constructor(private router:Router,
        private cookieService: CookieService) { 
    if(this.cookieService.get('token')==''){
  		this.router.navigate(['./login']);
  	}else{
  		this.username = this.cookieService.get('name');
      // console.log(this.username);
  	}
  }

  percent: number = 0;
  @HostListener('window:scroll', ['$event']) 
   track(value: number): void {
      let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
      if(Math.floor((window.pageYOffset/scrollHeight)*100) == 0){
        this.percent = 0;
      }else{
        this.percent = Math.floor((window.pageYOffset/scrollHeight)*100)+40;        
      }
      this.progressWidth = this.percent+'%';
      if($(window).scrollTop() + $(window).height() == $(document).height()) {
        this.progressWidth = '100%';
      }
      // console.log('Full document height, with scrolled out part: ' + scrollHeight);
      // console.log('Current scroll from the top: ' + window.pageYOffset);
      // console.log('Current scroll from the left: ' + window.pageXOffset);
  }
  
  ngOnInit() {
    
  }

}
