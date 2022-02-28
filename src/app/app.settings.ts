import { OnInit, InjectionToken } from '@angular/core';
import * as jwt_decode from "jwt-decode";

export class AppSettings {
  
  public static AUTH_STORAGE = '_emergency_auth';
  static getJwtParam(param) {

    if (access_token) {
      let jwt_params = jwt_decode(access_token);
      return jwt_params[param];
    }
    return {};
  }
}

export const BASE_URL: string = 'http://localhost:4200/';
