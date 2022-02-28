import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AuthGuard } from './auth/_helpers'; 
const routes: Routes = [

{ path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }, 
{ path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }, 

{ path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) }, 
{ path: 'device', loadChildren: () => import('./device/device.module').then(m => m.DeviceModule),canActivate: [AuthGuard] }, 
{ path: 'location', loadChildren: () => import('./location/location.module').then(m => m.LocationModule), canActivate: [AuthGuard]}, 
{ path: 'terms', loadChildren: () => import('./terms/terms.module').then(m => m.TermsModule) }, 
{ path: 'privacy', loadChildren: () => import('./privacy/privacy.module').then(m => m.PrivacyModule) },
{ path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) }, 
{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
