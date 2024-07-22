import { Component } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {
  username:string="default Username";

  onDisplay(){
    alert("Hello "+this.username);
  }

}
