import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { BootWebComponent } from './boot-web/boot-web.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EmailService } from './service/email.service';
import { HttpClientModule } from '@angular/common/http';
import { EmailComponent } from './email/email.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalenderComponent } from './calender/calender.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { HeadingComponent } from './heading/heading.component';
import { ReusableComponent } from './reusable/reusable.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { TaskComponent } from './task/task.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BootWebComponent,
    EmailComponent,
    CalculatorComponent,
    CalenderComponent,
    HeadingComponent,
    ReusableComponent,
    ChildComponent,
    ParentComponent,
    TaskComponent,
    TemplatedrivenformComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
  ],
  providers: [AuthGuard, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("app module loaded");
  }
 }
