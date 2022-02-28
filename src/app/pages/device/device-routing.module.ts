import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { EditFormComponent } from './edit/editform.component';

const routes: Routes = [
{ path: '', component: ListComponent },
{ path: 'add-device', component: FormComponent },
{ path: 'edit-device', component: EditFormComponent,  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
