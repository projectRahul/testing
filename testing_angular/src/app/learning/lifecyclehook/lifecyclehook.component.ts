import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  OnDestroy,
  SimpleChanges,
  AfterContentInit } from '@angular/core';

import { Router } from '@angular/router';
import { LearningService } from './../learning.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrls: ['./lifecyclehook.component.css']
})
export class LifecyclehookComponent implements OnInit, DoCheck, AfterViewInit,
        AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {
  userText : string = 'testing';
  order = 1;

  constructor(private learning_service : LearningService,
       		private cookieService: CookieService
	) {
  		console.log('I am from constructor()!! and my order::::' + this.order);
    	this.order++;
	}


  // ngOnChanges : go on simple component ts

  ngOnInit() {
    console.log('I am from ngOnInit() and my order::::' + this.order);
    this.order++;
  }

  ngDoCheck() {
    console.log('I am from ngDoCheck() and my order::::' + this.order);
    this.order++;
  }

  ngAfterContentInit() {
    console.log('I am from ngAfterContentInit() and my order::::' + this.order);
    this.order++;
  }

  ngAfterContentChecked() {
    console.log('I am from ngAfterContentChecked() and my order::::' + this.order);
    this.order++;
  }

  ngAfterViewInit() {
    console.log('I am from ngAfterViewInit() and my order::::' + this.order);
    this.order++;
  }

  ngAfterViewChecked() {
    console.log('I am from ngAfterViewChecked() and my order::::' + this.order);
    this.order++;
  }

  ngOnDestroy() {
    console.log('I am from ngOnDestroy() and my order::::' + this.order);
    this.order++;
  }		
}