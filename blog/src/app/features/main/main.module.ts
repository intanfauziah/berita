import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { PrimeNGModule } from 'src/app/shared/prime-ng.module';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    PrimeNGModule,
  ]
})
export class MainModule { }
