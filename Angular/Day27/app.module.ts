import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { Eventbinding1Component } from './eventbinding1/eventbinding1.component';
import { Evnetbiding3Component } from './evnetbiding3/evnetbiding3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Evnetbiding2Component } from './evnetbiding2/evnetbiding2.component';
import { Eventbinding4Component } from './eventbinding4/eventbinding4.component';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child3Component } from './child3/child3.component';
import { InbuiltpipeComponent } from './inbuiltpipe/inbuiltpipe.component';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { SummaryPipe } from './utility/summary.pipe';
import { CourseComponent } from './course/course.component';
import { CourseService } from './utility/course.service';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { QueryParameterComponent } from './query-parameter/query-parameter.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { NotificationComponent } from './notification/notification.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemobootstrapComponent } from './demobootstrap/demobootstrap.component';
import { DemotdfComponent } from './demotdf/demotdf.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent,
    StringinterpolationComponent,
    PropertybindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    EventbindingComponent,
    Eventbinding1Component,
    Evnetbiding3Component,
    Evnetbiding2Component,
    Eventbinding4Component,
    IfdirectiveComponent,
    FordirectiveComponent,
    SwitchDirectiveComponent,
    ParentComponent,
    Child1Component,
    Parent1Component,
    Child2Component,
    Parent2Component,
    Child3Component,
    InbuiltpipeComponent,
    CustompipeComponent,
    SummaryPipe,
    CourseComponent,
    PostComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    FollowerComponent,
    MyfollowerComponent,
    QueryParameterComponent,
    NotfoundComponent,
    ProductComponent,
    TvComponent,
    MobileComponent,
    LaptopComponent,
    NotificationComponent,
    LoginComponent,
    DashboardComponent,
    DemobootstrapComponent,
    DemotdfComponent,
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
