import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFormComponent, deviceFormComponent } from './editform.component';
import { HeaderModule } from '../../elements/header/header.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
 
 import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    EditFormComponent, deviceFormComponent
  ],
  imports: [
    CommonModule,HeaderModule, RouterModule, HttpClientModule,MatCardModule,MatFormFieldModule,
    ReactiveFormsModule,MatInputModule, FormsModule
  ],
  exports:[
   deviceFormComponent
  ]
})
export class EditFormModule { }
