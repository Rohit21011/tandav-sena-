import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})
export class DonationPage implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
Donation(){
  console.log("hewee")
  this.router.navigateByUrl('/online-donation');
}
}
