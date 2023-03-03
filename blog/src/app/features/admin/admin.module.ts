import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { PrimeNGModule } from 'src/app/shared/prime-ng.module';
import { AdminRoutingModule } from './admin-routing.module';
import { RuhArtikelComponent } from './ruh-artikel/ruh-artikel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminPageComponent,
    RuhArtikelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimeNGModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
