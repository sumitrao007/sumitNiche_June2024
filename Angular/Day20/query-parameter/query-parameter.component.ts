import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-parameter',
  templateUrl: './query-parameter.component.html',
  styleUrls: ['./query-parameter.component.css']
})
export class QueryParameterComponent implements OnInit {

  jsonObj:any={};
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.getDatafromUrl();
  }

  getDatafromUrl(){
    this.route.queryParamMap
    .subscribe((param:any)=>{
      this.jsonObj.myid=+param.get("id");
      this.jsonObj.myfname=param.get("fname");
      this.jsonObj.mylname=param.get("lname");
    })
  }

}
