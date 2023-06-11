import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-online-donation',
  templateUrl: './online-donation.page.html',
  styleUrls: ['./online-donation.page.scss'],
})
export class OnlineDonationPage implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
  payOnline(){

  }
  payOffline(){
    this.router.navigateByUrl('/offline-donation')

  }
}
