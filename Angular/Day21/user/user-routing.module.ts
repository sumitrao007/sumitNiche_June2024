import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListuserComponent } from './listuser/listuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DeleteeuserComponent } from './deleteeuser/deleteeuser.component';

const routes: Routes = [
    {
      path:"",component:ListuserComponent
    },
    {
      path:"adduser",component:AdduserComponent
    },
    {
      path:"updateuser",component:UpdateuserComponent
    },
    {
      path:"deleteuser",component:DeleteeuserComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
