import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage  {

  constructor(
    public router:Router
  ) { }


goBack(){
this.router.navigateByUrl('forget-page');
}
}
