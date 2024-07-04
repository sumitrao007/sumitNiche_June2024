import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component {

  name:string='';

  result:number=0;

  onSend(myevent:any){
    // console.log("Event Occur..")
    console.log(myevent);
    console.log(myevent.target.value);
  }

  onSendData(myinput:any){

    console.log(myinput);
    console.log(myinput.value);
    myinput.style.background='green';
    myinput.style.color='white';
    this.name=myinput.value;
  }


  onSendData1(myvalue:string){

    console.log(myvalue);
    
  }


  onAddition(num1:any,num2:any){

    let n1=+num1;
    let n2=+num2;

    // this.result=num1+num2;
 
    this.result=n1+n2;
  }


}
