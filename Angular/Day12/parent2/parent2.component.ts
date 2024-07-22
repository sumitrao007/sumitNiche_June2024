import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements AfterViewInit {
  
  @ViewChild("mydiv") myDivAccess!:ElementRef<HTMLDivElement>

  @ViewChild(Child3Component) childAccess!:Child3Component;

  ngAfterViewInit(): void {
    console.log(this.myDivAccess);
    this.myDivAccess.nativeElement.className="divbg";   
  }


  onPropertyAccess(){
    this.childAccess.username="Sumit Raokhande";
  }

  onMethodAccess(){
    this.childAccess.onDisplay();
  }

}
