import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,HttpClientModule
  ],
   providers: [
       

        // provider used to create fake backend
       // fakeBackendProvider
    ],
})
export class PagesModule { }
