import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ihome } from './../IHome';
import { HomeService } from './../home.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent implements OnInit {
  addCsv : FormGroup;
  collection_data: any;
  private readonly notifier: NotifierService;

  constructor(private cv: FormBuilder,
  			private router: Router,
  			private home_service : HomeService,
        private notifierService: NotifierService) 
  { 
  	  this.notifier = notifierService;
  }

  ngOnInit() {
  	this.addCsv = this.cv.group({
  		select_table: ['',[Validators.required]],
  		file: [''],
  	});




  	this.home_service.getCollectionList()
      .subscribe( collection_list => {
        console.log(collection_list);
        if (collection_list.status) {
        	this.collection_data = collection_list.data;
        }else{
        	this.collection_data = '';
        }
    })
  }

}
