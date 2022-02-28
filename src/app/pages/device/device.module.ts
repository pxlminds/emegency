import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device.component';
import { HeaderModule } from '../elements/header/header.module';
import { ListModule } from './list/list.module';
import { FormModule } from './form/form.module';
import { EditFormModule } from './edit/editform.module';

@NgModule({
  declarations: [
    DeviceComponent
      ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    HeaderModule,
    FormModule,
    ListModule,
    EditFormModule
  ]
})
export class DeviceModule { }
