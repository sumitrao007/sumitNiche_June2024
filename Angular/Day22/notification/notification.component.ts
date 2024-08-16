import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
    msgNotification='';
    constructor(private service:NotificationService){}
  ngOnInit(): void {
    this.getDataFromNotification();
  }

  getDataFromNotification(){
    this.service.notification
    .subscribe((data)=>{
      this.msgNotification=data;
    })
  }

}
