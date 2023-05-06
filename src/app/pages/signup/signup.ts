import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: UserOptions = { username: '',email: '', password: '',mobile:'', bloodgroup: '',address:'',profestion:''};
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData
  ) {}


  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }
  next(el:any) {
    el.setFocus();
  }
  signIn(){
      this.router.navigateByUrl('/login');
  }
  goBack(){
    this.router.navigateByUrl('/login');
  }
}
