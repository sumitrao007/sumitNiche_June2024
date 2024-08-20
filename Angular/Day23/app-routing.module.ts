import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FollowerComponent } from './follower/follower.component';
import { Page3Component } from './page3/page3.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { QueryParameterComponent } from './query-parameter/query-parameter.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { kuchbhi } from './auth.guard';
// import { authGuard, kuchbhi } from './auth.guard';

// const routes: Routes = [
//     // {
//     //     path:"",component:HomeComponent
//     // },
//     {
//       path:"",component:Page1Component
//     },
//     {
//       path:"Page2/:id",component:Page2Component
//     },
//     {
//       path:"Page3/:id/:username",component:Page3Component
//     },
//     {
//       path:"Follower",component:FollowerComponent
//     },
//     {
//       path:"Myfollower",component:MyfollowerComponent
//     },
//     {
//       path:"QueryParameter",component:QueryParameterComponent
//     },
//     {
//       path:"product",children:[
//           {
//             path:"",component:ProductComponent
//           },
//           {
//             path:"tv",component:TvComponent
//           },
//           {
//             path:"mobile",component:MobileComponent
//           },
//           {
//             path:"laptop",component:LaptopComponent
//           }
//       ]
//     },
//     {
//       path:"user",loadChildren:()=>import("./user/user.module").then(m=>m.UserModule)
//     },
//     {
//       path:"**",component:NotfoundComponent
//     }
// ];

const routes: Routes = [

  {
    path:"",redirectTo:"/login",pathMatch:"full"
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"dashboard",component:DashboardComponent,canActivate:[kuchbhi],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
