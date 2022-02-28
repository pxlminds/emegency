import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { HeaderModule } from '../../elements/header/header.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
//import { JwtInterceptor, ErrorInterceptor } from '../../../pages/auth/_helpers';
//import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 
 import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,HeaderModule, RouterModule, HttpClientModule,MatCardModule,MatFormFieldModule,
    ReactiveFormsModule,MatInputModule,
    FormsModule
  ],
/*  providers: [ 
       { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
        ],*/
})
export class FormModule { }
