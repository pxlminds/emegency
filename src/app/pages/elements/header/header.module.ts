import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { PagesRoutingModule} from '../../pages-routing.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { } 
