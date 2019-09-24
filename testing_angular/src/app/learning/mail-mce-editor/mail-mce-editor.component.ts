import { Component, OnInit } from '@angular/core';
import { LearningService } from '../learning.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-mail-mce-editor',
  templateUrl: './mail-mce-editor.component.html',
  styleUrls: ['./mail-mce-editor.component.css']
})
export class MailMceEditorComponent implements OnInit {
  sendMailForm : FormGroup;
  private readonly notifier: NotifierService;

  constructor(private smf: FormBuilder,
	  private learningservice: LearningService,
	  private notifierService: NotifierService) { 
  		this.notifier = notifierService;
  	}

  ngOnInit() {
  	this.sendMailForm = this.smf.group({
  		heading: ['',[Validators.required]],
  		email: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
  		content: ['',[Validators.required]],
  	});
  }

  onSubmit(){
 	// console.log(this.sendMailForm.value);
 	this.learningservice.sendMail(this.sendMailForm.value)
      .subscribe( data => {
        // console.log(data.status);
      	if(data.status){
     		this.notifier.notify( 'success', 'Mail Send Successfully' );
        }else{
        	this.notifier.notify( 'danger', 'Something Went Wrong' );
        }
    });
  }

}
