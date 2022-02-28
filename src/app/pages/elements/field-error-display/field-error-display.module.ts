import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldErrorDisplayComponent }   from './field-error-display.component';
import { SharedModule }   from '../../../shared.module';


@NgModule({
 	imports: [SharedModule],
    declarations: [FieldErrorDisplayComponent],
    exports: [FieldErrorDisplayComponent]
})
export class FieldErrorDisplayModule { }


