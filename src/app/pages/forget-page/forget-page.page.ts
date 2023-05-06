import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-page',
  templateUrl: './forget-page.page.html',
  styleUrls: ['./forget-page.page.scss'],
})
export class ForgetPagePage  {

  constructor(
    public router:Router
  ) {

  }
  next(el:any) {
    el.setFocus();
  }

  signIn(){
    this.router.navigateByUrl('/login');
  }
  goBack(){
    this.router.navigateByUrl('login');
  }
}
