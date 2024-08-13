import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DeleteeuserComponent } from './deleteeuser/deleteeuser.component';
import { ListuserComponent } from './listuser/listuser.component';


@NgModule({
  declarations: [
    AdduserComponent,
    UpdateuserComponent,
    DeleteeuserComponent,
    ListuserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
