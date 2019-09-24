import {
  Component,
  SimpleChanges,
  OnChanges, Input } from '@angular/core';


@Component({
  selector: 'simple',
  template: 'You Entered : {{simpleInput}}'
})
export class SimpleComponent implements OnChanges {
  @Input() simpleInput : string;
  


  ngOnChanges(changes: SimpleChanges) {
    for(let prop in changes){
      console.log(prop+' : CurrentValue = '+JSON.stringify(changes[prop].currentValue)+' PreviousValue = '+JSON.stringify(changes[prop].previousValue));
    }
    
  }
}