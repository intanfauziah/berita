import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './features/navigation/menu/menu.component';
import { NavbarComponent } from './features/navigation/navbar/navbar.component';
import { NavigationRoutingModule } from './features/navigation/navigation-routing.module';
import { PrimeNGModule } from './shared/prime-ng.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavigationRoutingModule,
    PrimeNGModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }