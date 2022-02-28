import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../auth/_services';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  IMG_PREFIX: string = './assets/images/';
  isAuthenticated: boolean = false;
  constructor(public authService: AuthenticationService,private router: Router) { }
  logout() {
        this.authService.logout();
        this.router.navigate(['/']);
    }
  isLoggedIn() {
    this.isAuthenticated = this.authService.isLoggedIn();
  }
  ngOnInit(): void {
  }

}
