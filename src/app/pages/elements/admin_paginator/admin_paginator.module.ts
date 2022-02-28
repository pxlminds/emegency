import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPaginatorComponent }   from './admin_paginator.component';
import { SharedModule }   from '../../../shared.module';


const paginatorRoutes: Routes = [
  { path: '', component: AdminPaginatorComponent },
];

@NgModule({
 	imports: [SharedModule],
    declarations: [AdminPaginatorComponent],
    exports: [AdminPaginatorComponent]
})
export class AdminPaginatorModule { }


