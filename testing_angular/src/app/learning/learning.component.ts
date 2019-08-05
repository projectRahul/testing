import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  
  constructor(private router: Router,
  	) { 
  }
 
  

  ngOnInit() {
  }

}
