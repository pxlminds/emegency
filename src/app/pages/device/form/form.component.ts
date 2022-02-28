import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import Swal from 'sweetalert2';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  formValid: boolean = false;
  formStatus: boolean = false;
  form_loading: boolean = false;
  accountHolder: boolean = false;
    ngOnInit(): void {     
  }
   
  deviceSuccess() {
      Swal.fire({
        icon: 'success',
        title: 'Process Success!',         
      })
  }
  deviceError() {
      Swal.fire({
        title: 'Save Failed',         
        icon: 'error'
      })
  }
 deviceform = this.fb.group({
    deviceName: ['', Validators.required],
    deviceUniqueNumber: ['', Validators.required],
    accountHolder: ['']
  });
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }



  onSubmit() {
      let token =localStorage.getItem("token");
      let headers_object = new HttpHeaders({
        'Content-Type': 'application/json',
       'Authorization': "Bearer " + token
       });
      
      const httpOptions = {
          headers: headers_object
        };
      
    // TODO: Use EventEmitter with form value
    console.warn(this.deviceform.value);   
    console.log('Passed validation and submitted')
     this.http.post(`${environment.apiUrl}/device/add`, JSON.stringify(this.deviceform .value), httpOptions).subscribe(
          result => { this.formStatus = true;
            this.deviceform.reset(); },
            error => { this.formStatus = true;
             this.deviceError();//alert
           },
          () => {
            if (this.formStatus) {
               this.deviceSuccess();//alert
               this.router.navigate(['device']);
              //console.log('Success!', 'Signup sucessfully saved.', 'success')
            } 
          }
        );

  }
    getError(formControlName: string, validatorName: string): string {
    return this.determineErroMessage(formControlName, validatorName);
      }
    private determineErroMessage(formControlName: string, validatorName: string): string {
    switch(formControlName) {
      case 'deviceName': return 'You must enter a valid Device Name'
      case 'deviceUniqueNumber': return 'You must enter a your Device Number'
      default: return 'You must enter a value'
   
      }
}
}
