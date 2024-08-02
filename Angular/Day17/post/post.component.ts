import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit
{

  studentData:any[]=[];
  id:number=0;
  name:string='';
  phoneno:string='';
  isHidden:boolean=true;

  studdata:Student=<Student>{};


  constructor(private service:HttpService){}
  
  ngOnInit(): void {
    this.getDataFromBackend();
  }

  getDataFromBackend(){
      this.service.getAllRecord()
      .subscribe((response:any)=>{
        // console.log(response);
        this.studentData=response;
      })
  }


  onSend(myname:string,myno:string){
      let jsonObj={
        name:myname,
        phoneno:myno,
        createddate:Date.now()
      }
      this.service.PostData(jsonObj)
      .subscribe((response)=>{
        console.log(response);
      });
  }

  onEdit(item:any){
    console.log(item);
    // this.id=item.id;
    // this.name=item.name;
    // this.phoneno=item.phoneno;
    this.studdata=item;
    
    this.isHidden=false;
  }

  onUpdate(){   

    this.service.updateData(this.studdata)
    .subscribe((response)=>{
      console.log(response);
      this.getDataFromBackend();
      this.isHidden=true;
    })

  }


}
