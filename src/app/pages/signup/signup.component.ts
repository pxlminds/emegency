import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  IMG_PREFIX: string = './assets/images/';
  formValid: boolean = false;
  formStatus: boolean = false;
  form_loading: boolean = false;
    ngOnInit(): void {
     
  }
   signupSuccess() {
      Swal.fire({
        title: 'Successfully Registred!',         
      })
  }
  signuperror() {
      Swal.fire({
        title: 'Registration Failed',         
        icon: 'error'
      })
  }

 signupform = this.fb.group({
    name: ['', Validators.required],
    password: ['123456'],
    accountHolder:['true'],
    emailId: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],  
  });
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signupform.value);   
    console.log('Passed validation and submitted')
     this.http.post(`${environment.apiUrl}/user/signup`, JSON.stringify(this.signupform .value)).subscribe(
          result => { this.formStatus = true;
            this.signupform.reset(); },
          error => { this.formStatus = true; this.signuperror();},
          () => {
            if (this.formStatus) {
               this.signupSuccess();//alert
              //console.log('Success!', 'Signup sucessfully saved.', 'success')
            } 
            else{
              
            }
          }
        );

  }
    getError(formControlName: string, validatorName: string): string {
    return this.determineErroMessage(formControlName, validatorName);
      }
    private determineErroMessage(formControlName: string, validatorName: string): string {
    switch(formControlName) {
      case 'emailId': return 'You must enter a valid email'
      case 'name': return 'You must enter a your name'
      default: return 'You must enter a value'
   
      }
}
}