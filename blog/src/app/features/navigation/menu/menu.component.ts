import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  visibleSidebar1: boolean = false;
  rotateMenuButton: boolean = false;
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Home',
          // icon: 'pi pi-home',
          routerLink: '/main'
      },
      {
          label: 'Admin',
          // icon: 'pi pi-user',
          routerLink: '/admin'
      }
  ];
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
