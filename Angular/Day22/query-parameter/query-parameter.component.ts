import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-query-parameter',
  templateUrl: './query-parameter.component.html',
  styleUrls: ['./query-parameter.component.css']
})
export class QueryParameterComponent implements OnInit {

  jsonObj:any={};
  getNotifyData:string='';
  constructor(private route:ActivatedRoute,
              private notifyService:NotificationService

  ){}

  ngOnInit(): void {
    this.getDatafromUrl();
    this.getNotificationData();
  }

  getDatafromUrl(){
    this.route.queryParamMap
    .subscribe((param:any)=>{
      this.jsonObj.myid=+param.get("id");
      this.jsonObj.myfname=param.get("fname");
      this.jsonObj.mylname=param.get("lname");
    })
  }

  getNotificationData(){
      this.notifyService.notification
      .subscribe((data)=>{
          this.getNotifyData=data;
      })
  }

  onSend(data:string){
    console.log(data)
    this.notifyService.sendMessage(data)
  }

}
