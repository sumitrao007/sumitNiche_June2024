import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent {

  name:string='SumitNiche';
  imgUrl:string='../../assets/bg4.jpg';

  isHidden:boolean=false;
}
