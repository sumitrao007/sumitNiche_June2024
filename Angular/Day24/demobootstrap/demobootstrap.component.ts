import { Component } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent {

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

}
