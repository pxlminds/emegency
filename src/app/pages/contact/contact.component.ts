import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    formValid: boolean = false;
  formStatus: boolean = false;
  form_loading: boolean = false;
    IMG_PREFIX: string = './assets/images/';
    ngOnInit(): void {
  }
 contactform = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    message: ['', Validators.required],   
  });
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  onSubmit() {

    // TODO: Use EventEmitter with form value
    console.warn(this.contactform.value);   
    console.log('Passed validation and submitted')
     this.http.put('/contact/', JSON.stringify(this.contactform .value)).subscribe(
          result => { this.formStatus = true;
            this.contactform.reset(); },
          error => { this.formStatus = true; },
          () => {
            if (this.formStatus) {
            
              console.log('Success!', 'Contact sucessfully saved.', 'success')
            }
          }
        );

  }
    getError(formControlName: string, validatorName: string): string {
    return this.determineErroMessage(formControlName, validatorName);
      }
    private determineErroMessage(formControlName: string, validatorName: string): string {
    switch(formControlName) {
      case 'email': return 'You must enter a valid email'
      case 'mobile': return 'You must enter a valid mobile number'
      case 'name': return 'You must enter a your name'
      default: return 'You must enter a value'
   
      }
}
}