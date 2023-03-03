import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from 'src/app/shared/prime-ng.module';
import { NavigationRoutingModule } from './navigation-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    PrimeNGModule,
  ]
})
export class AdminModule { }
