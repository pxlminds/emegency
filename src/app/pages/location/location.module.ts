import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { HeaderModule } from '../elements/header/header.module';

@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    HeaderModule
  ]
})
export class LocationModule { }
