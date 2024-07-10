import { Component } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent {

  course:string[]=["Core Java","Addvanced java",'Spring Boot','Angular 16','DSA','AWS','Docker'];

  onClick(item:any){
    alert(item);
  }

}
