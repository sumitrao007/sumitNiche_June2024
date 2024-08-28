import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  // constructor(private reactiveservice:FormBuilder){

  // }
  
  reactiveFormGroup!:FormGroup;
  country:any=[
    {cid:1,cname:'India'},
    {cid:2,cname:'US'},
    {cid:3,cname:'Japan'}
  ];

  ngOnInit(): void {

    // this.reactiveservice.group({
    //   username:[null,Validators.required]
    // })

    this.reactiveFormGroup=new FormGroup({
      username:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.pattern("admin")]),
      comment:new FormControl(null,Validators.required),
      subscribed:new FormControl(null),
      contact:new FormControl(null),
      country:new FormControl(null),
      email:new FormControl(null,[Validators.required,Validators.pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")])   
    });
    
    
   
  }

  onSubmit(){
    console.log(this.reactiveFormGroup);
  }



}
