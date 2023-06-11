import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(
    public router: Router
  ) { }
  addMember(){
    
    this.router.navigateByUrl('/add-member');
  }
  consult(){
    this.router.navigateByUrl('/add-member');
  }
  complaint(){
    this.router.navigateByUrl('/add-member');
  }
  donations(){
    this.router.navigateByUrl('/donation');
  }
  reliefFund(){
    this.router.navigateByUrl('/donation');
  }
  specialFund(){
    this.router.navigateByUrl('/donation');
  }
  ngOnInit(): void {
  }

}
