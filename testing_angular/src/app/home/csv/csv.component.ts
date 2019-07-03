import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ihome } from './../Ihome';
import { HomeService } from './../home.service';
import { NotifierService } from 'angular-notifier';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent implements OnInit {
  addCsv : FormGroup;
  collection_data: any;
  selectedFile : File = null;
  
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
  		action: ['',[Validators.required]],
  		file: [''],
  	});




  	this.home_service.getCollectionList()
      .subscribe( collection_list => {
        // console.log(collection_list);
        if (collection_list.status) {
        	this.collection_data = collection_list.data;
        }else{
        	this.collection_data = '';
        }
    });

  }

	sample_collection(collection_name){
    let sample_link_icon = document.getElementById('sample_link_icon');
		if(collection_name != ''){
      sample_link_icon.style.display = 'block';
      document.getElementById('sample_link_icon').setAttribute("data-value", collection_name);
    }else{
      sample_link_icon.style.display = 'none';
    }
	}

  download_sample(){
      let collection_name = document.getElementById('sample_link_icon').getAttribute("data-value");
      if(collection_name != ''){
        this.home_service.getSampleCollection({'collection_name':collection_name})
          .subscribe( collection_list => {          
            let index__v = collection_list.data.indexOf('__v');
            if (index__v > -1) {
              collection_list.data.splice(index__v, 1);
            }
            let index_id = collection_list.data.indexOf('_id');
            if (index_id > -1) {
              collection_list.data.splice(index_id, 1);
            }
            new ngxCsv([Object.assign({}, collection_list.data)], collection_name);
      });
    }
  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
    const file = event.target.files[0];
    this.addCsv.get('file').setValue(file);
  }

	onSubmit(){
		const fd = new FormData();
		fd.append('select_table', this.addCsv.get('select_table').value);
		fd.append('action', this.addCsv.get('action').value);
		fd.append('file', this.addCsv.get('file').value);

		this.home_service.uploadCsv(<any>fd)
		.subscribe( data => {
		console.log(data.status);
			if(data.status == '1'){
				this.notifier.notify( 'success', 'Records Added Successfully' );
			}else{
				this.notifier.notify( 'danger', 'Records not Added' );
			}
		});
	}


}
