import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserLoginOptions } from '../../interfaces/user-options';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserLoginOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/dashboard');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
  forget(){
    this.router.navigateByUrl('/signup');
  }
  forgetPassword(){
    this.router.navigateByUrl('/forget-page');
  }
  signup(){
    this.router.navigateByUrl('/signup-details');
    console.log("jhbfd");
  }
}
