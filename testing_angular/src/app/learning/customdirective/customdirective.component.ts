import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { CheckpasswordDirective } from './checkpassword.directive';

@Component({
  selector: 'app-customdirective',
  templateUrl: './customdirective.component.html',
  styleUrls: ['./customdirective.component.css']
})
export class CustomdirectiveComponent implements OnInit {
  private readonly notifier: NotifierService;
  customDirectiveForm : FormGroup;
  constructor(private cdf: FormBuilder,
  			private router: Router,
        	private notifierService: NotifierService
  	) { 
  		this.notifier = notifierService;
  	}

  ngOnInit() {
  	this.customDirectiveForm = this.cdf.group({
  		name: ['',[Validators.required]],
  		similiar: ['',[Validators.required]]
  	});
  }
  onSubmit(){}

}
