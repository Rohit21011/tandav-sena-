import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnName:string;
  @Output() onClick:EventEmitter<void> = new EventEmitter<void>();
 
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  
}
