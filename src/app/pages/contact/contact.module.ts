import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { HeaderModule } from '../elements/header/header.module';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule, ContactRoutingModule,HttpClientModule, HeaderModule, ReactiveFormsModule, FormsModule,MatInputModule,   
  ]
})
export class ContactModule { }
