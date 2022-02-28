import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { AuthenticationService } from '../_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const currentUser = this.authenticationService.currentUserValue;
        console.log('hai', currentUser);
        console.log('hai123', this.authenticationService);
        return next.handle(request);
        const isLoggedIn = currentUser && currentUser.JWT;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
            console.log('fd');
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.JWT}`
                }
            });
        }

        return next.handle(request);
    }
}

