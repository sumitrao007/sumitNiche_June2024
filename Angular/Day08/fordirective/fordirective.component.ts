import { Component } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent {

  course:string[]=["Core Java","Addvanced java",'Spring Boot','Angular 16','DSA','AWS','Docker'];


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

selected:string='';
removeOpacity:boolean=false;

  onClick(item:any){
    alert(item);
  }

  onMouseOver(item:any){
    console.log("Mouse Over Event Occur...")
    this.selected=item.name;
  }

  onMouseOut(){
    console.log("==========  on Mouse out event is occur...========")

    this.selected='';

  }

  onImageHover(imgObj:any){
   // this.removeOpacity=true;
   console.log(imgObj);
   imgObj.style.opacity='1';
  }

  onImageOut(imgObj:any){
    imgObj.style.opacity='0.5';
  }

  onImageHover1(){
    this.removeOpacity=true;
  }

  onImageOut1(){
    this.removeOpacity=false;
  }

}
