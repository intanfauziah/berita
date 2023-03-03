import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  visibleSidebar1: boolean = false;
  rotateMenuButton: boolean = false;
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onMenuClick(){
    if (this.visibleSidebar1){
      this.visibleSidebar1 = false;
      this.rotateMenuButton = false;
    } else {
      this.visibleSidebar1 = true;
      this.rotateMenuButton = true
    }
  }

}
