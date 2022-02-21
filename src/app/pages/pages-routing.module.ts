import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
      // {
      //   path: 'json',
      //   component: JsonComponent
      // },
      // {
      //   path: '',
      //   redirectTo: 'users',
      //   pathMatch: 'full',
      // }, {
      //   path: '**',
      //   component: NotFoundComponent,
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
