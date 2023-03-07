import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainPageComponent } from './features/main/main-page/main-page.component';
import { NavbarComponent } from './features/navigation/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: '',
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'main',
        loadChildren: () =>
          import('./features/main/main.module').then((m) => m.MainModule)
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./features/admin/admin.module').then((m) => m.AdminModule)
      },
    ]
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
