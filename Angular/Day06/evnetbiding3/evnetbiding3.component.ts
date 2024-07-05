import { Component } from '@angular/core';

@Component({
  selector: 'app-evnetbiding3',
  templateUrl: './evnetbiding3.component.html',
  styleUrls: ['./evnetbiding3.component.css']
})
export class Evnetbiding3Component {
  name:string='';
  username:string='';
  password:string='';
  mywidth:number=50;

  onLogin(){
    if(this.username=="sumit" && this.password=="sumit123"){
      alert("Login Successfully...")
    }else{
      alert("Invalid Creadential")
    }
  }

}
