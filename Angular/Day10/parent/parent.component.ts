import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  @Input() appNumData!:number;

  strData:string='Hopes so U are understand The Angular Module..';

  sendDate:string='';

  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }

  onSend(mydate:string){
    this.sendDate=mydate;
  }


}
