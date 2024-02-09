import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule,
    ReactiveFormsModule
  ]
})
export class LazyLoadingModule {
  constructor(){
    console.log("register module loaded");
  }
 }
