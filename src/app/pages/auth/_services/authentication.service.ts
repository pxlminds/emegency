
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    isLoggedin: boolean = false;
    private currentUserSubject: BehaviorSubject<User | null>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {    
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(emailID: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/user/login`, { emailID, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));              
                localStorage.setItem('token',user.data.authResponse.JWT);
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        this.currentUserSubject.next(null);
    }
    isLoggedIn() {

   // debugger;
    if (JSON.parse(localStorage.getItem('currentUser')) == null) {
      this.isLoggedin = false;
      return this.isLoggedin;
    }
    else {
      return true;
    }
  }
}