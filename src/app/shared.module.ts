import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
//import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './pages/auth/auth.interceptor';
import { NgScrollbarModule } from 'ngx-scrollbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [ CommonModule],
  declarations: [],
  exports: [CommonModule,NgScrollbarModule,NgbModule, FormsModule, 
  MatAutocompleteModule, MatInputModule
  ],
    providers: [{
    //  provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }],
  
})

export class SharedModule {}

