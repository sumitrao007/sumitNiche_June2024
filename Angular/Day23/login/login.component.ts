import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginservice:LoginService,
              private router:Router
  ){}

  onLogin(myusername:string,mypassword:string){

    let obj={
      username:myusername,
      password:mypassword
    }

    this.loginservice.login(obj)
    .subscribe((response:any)=>{
      // console.log(response);

      if(response.msg=="Valid User"){
        // valid user
        // alert(response.msg)
        sessionStorage.setItem("username",response.user.username);
        this.router.navigate(["/dashboard"]);
      }else{
        // invalid user 
      }

    })

  }

}
