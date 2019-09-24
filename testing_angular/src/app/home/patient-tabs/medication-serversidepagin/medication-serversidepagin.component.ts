import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Ihome } from './../../Ihome';
import { HomeService } from './../../home.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-medication-serversidepagin',
  templateUrl: './medication-serversidepagin.component.html',
  styleUrls: ['./medication-serversidepagin.component.css']
})
export class MedicationServersidepaginComponent implements OnInit {
  dropdown_data : any; 
  unique_no_patient:any = {"unique_num":this.cookieService.get('unique_num')};

  pager = {};
  pageOfItems = [];

  constructor(private router:Router,
  			private route : ActivatedRoute,
        private home_service : HomeService,
        private spinner : NgxSpinnerService,
        private cookieService: CookieService
  			) {
            this.home_service.getDrugDropdown(this.unique_no_patient)
            .subscribe( dropdown_data => {
              if (dropdown_data.status) {
                this.dropdown_data = dropdown_data.data;
               }else{
                 this.dropdown_data = '';
               }
            })

            // load page based on 'page' query param or default to 1
            this.route.queryParams.subscribe(x => this.loadPage(x.page || 1));

        }

  ngOnInit() {  }

  private loadPage(page) {
      this.spinner.show();
      let rec: any = {"unique_num":this.cookieService.get('unique_num'),'page':page};
      this.home_service.getPatientMedicationDetailsPagin(rec).subscribe(x => {
          if (!x.status) {
            this.pageOfItems = [];
            this.spinner.hide();
          }
          this.pager = x.pager;
          this.pageOfItems = x.pageOfItems;
          this.spinner.hide();
      });
  }

  drugDropdownOnChange(event: any){
    this.spinner.show();
    let dropdown_filter:any ='';
    if(event.target.value == ''){
      dropdown_filter = {"unique_num":this.cookieService.get('unique_num'),'page':1};
    }else{
      dropdown_filter = {"unique_num":this.cookieService.get('unique_num'),'drug':event.target.value,'page':1};
    }
    this.home_service.getPatientMedicationDetailsPagin(dropdown_filter)
    .subscribe(x => {
        if (!x.status) {
          this.dropdown_data = '';
        }
        this.pager = x.pager;
        this.pageOfItems = x.pageOfItems;
        this.spinner.hide();
    });
  }

}