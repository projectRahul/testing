import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-promise-observable',
  templateUrl: './custom-promise-observable.component.html',
  styleUrls: ['./custom-promise-observable.component.css']
})
export class CustomPromiseObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  		/******For Calling custom promise ******/
		  	this.getData('This is testing record')
		    .then(data => console.log('Promise data : ',data))
		    .catch(error => console.log('Promise error : ',error));
		/***************************************/

		console.log('For Custom Observable click on site example : ','https://jsbin.com/yazedu/1/edit?js,console,output');
  }

  	/******Custom Promise function*************/
	getData(record) {
	    return new Promise((resolve, reject)=>{
	        // request( `http://localhost:4200/custompromise`, (error, res, Data)=>{
	        //     if (error) reject(error);
	        //     else resolve(Data);
	        // });
	        // console.log(record);
	        if(record == 'testing'){
	        	resolve(record);
	        }else{
	        	reject("string not match");
	        }
	    });
	}
	/**************************************/
}
