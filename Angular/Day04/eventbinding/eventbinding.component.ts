import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {

  // isclick:boolean=true;
  count:number=1;
  onClick(){
    // if(this.isclick){
    //   console.log("Click Event Occur....");
    //   this.isclick=false;
    // }   
    if(this.count<6){
      console.log("Click Event Occur....");
      this.count++;
    } 
  }

  onImage(){
    console.log("Click On Image.....")
  }

}
