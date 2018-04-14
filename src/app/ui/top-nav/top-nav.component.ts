import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FirebaseUserModel } from '../../core/user.model';
import { AuthService } from '../../core/auth.service';

 @Component({
   selector: 'app-top-nav',
   templateUrl: './top-nav.component.html',
 })

export class TopNavComponent {

  user: FirebaseUserModel = new FirebaseUserModel();

  constructor(
    public authService: AuthService,
    private location: Location,
  ) {

  }

  logout () {
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log('Logout error', error);
    });
  }

  
}
