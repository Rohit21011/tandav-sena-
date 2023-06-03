import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() headerName:string;
  @Input() showSearch: boolean;
  @Input() showNotification: boolean;

  constructor() {}

  toggleSidebar() {
    // Implement your logic to toggle the sidebar here
  }

  performSearch() {
    console.log("search")
    // Implement your search logic here
  }

  openNotifications() {
    console.log("notification")
    // Implement logic to open notifications here
  }
}
