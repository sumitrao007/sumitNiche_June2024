import { Component } from '@angular/core';

@Component({
  selector: 'app-inbuiltpipe',
  templateUrl: './inbuiltpipe.component.html',
  styleUrls: ['./inbuiltpipe.component.css']
})
export class InbuiltpipeComponent {

  strData:string="Hello All Welcome to angular module by sUmiT raoKhande";

  num2:number=-452.78956324557;
  mydate=new Date();
  
}
