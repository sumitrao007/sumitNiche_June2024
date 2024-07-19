import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

  @Output() childStrEvent=new EventEmitter();

  strData:string='Send data from Child To Parent...';

 @Output() childArrObjEvent=new EventEmitter();


 rangevalue:string='';

 @Output() childRangeEvent = new EventEmitter();


  arrProduct:any[]=[
    {
      name:"Samsung",
      price:25000,
      qty:1
    },
    {
      name:"Mototrolla",
      price:30000,
      qty:1
    },
    {
      name:"Realme",
      price:18000,
      qty:1
    },
    {
      name:"Apple",
      price:100000,
      qty:1
    }

  ];

  onSend(){
    this.childStrEvent.emit(this.strData);
    this.childArrObjEvent.emit(this.arrProduct);
  }

  onMaleData(){
    this.strData="Male Data Send..."
    this.childStrEvent.emit(this.strData);
  }

  onRangeChange(){
    console.log(this.rangevalue)
   this.childRangeEvent.emit(this.rangevalue);
  }

}
