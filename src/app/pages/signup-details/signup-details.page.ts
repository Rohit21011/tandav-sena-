import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-details',
  templateUrl: './signup-details.page.html',
  styleUrls: ['./signup-details.page.scss'],
})
export class SignupDetailsPage  {

  constructor(
    public router:Router
  ) { }

signIn(){
this.router.navigateByUrl('/login');
}
signup(){
  this.router.navigateByUrl('/dashboard');
}
}
