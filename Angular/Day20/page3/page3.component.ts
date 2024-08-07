import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  urlData:any={
    id:0,
    username:''
  };

  constructor(private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.getDataFromUrl();
  }

  getDataFromUrl(){
    this.route.paramMap
    .subscribe((param:any)=>{
      this.urlData.id=+param.get("id");
      this.urlData.username=param.get("username");
    })
  }

}
