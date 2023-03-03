import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RuhArtikelComponent } from './ruh-artikel/ruh-artikel.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent
  },
  {
    path: 'ruh',
    component: RuhArtikelComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
