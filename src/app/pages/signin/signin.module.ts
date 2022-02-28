import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { HeaderModule } from '../elements/header/header.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    HeaderModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SigninModule { }
