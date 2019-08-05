import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appCheckpassword]'
})
export class CheckpasswordDirective {

@Input() namevalue: string;
@Input() value: string;

  constructor(
   private elmRef: ElementRef, 
   private renderer: Renderer2) 
  { }

  ngOnInit() {
    // let roundVal = `${this.appCheckpassword}`;
    // console.log(this.value);
    // this.renderer.setStyle(this.elmRef.nativeElement, 'color', roundVal);
  }
  	@HostListener('input') onChange() {
	  console.log(this.value);
	  console.log(this.elmRef);
	  // $(this.elmRef.nativeElement.id).attr('data-a');
	  (this.elmRef.nativeElement).setAttribute('data-col]', 'asas');
	    // this.renderer.markAsTouched();
	}

}
