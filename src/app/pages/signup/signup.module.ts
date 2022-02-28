import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { HeaderModule } from '../elements/header/header.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    HeaderModule,
      HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SignupModule { }
