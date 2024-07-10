import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding4',
  templateUrl: './eventbinding4.component.html',
  styleUrls: ['./eventbinding4.component.css']
})
export class Eventbinding4Component {

  result:number=0;

  onKeyUp(){
    console.log("Key Up Event Occur")
  }

  onKeyDown(){
    console.log("Key Down Event Occur...")
  }

  onKeyUpname(myvalue:string){

    if(myvalue.length>5){
      alert("U r exceed a charcter");
    }

  }

  onKeyEnter(){
    console.log("Enter key is Pressed...")
  }

}
