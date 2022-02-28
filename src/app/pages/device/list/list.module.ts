import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { HeaderModule } from '../../elements/header/header.module';
import { RouterModule, Routes } from '@angular/router';
import {EditFormModule} from '../edit/editform.module';
@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule, HeaderModule, RouterModule, EditFormModule
  ]
})
export class ListModule { }
