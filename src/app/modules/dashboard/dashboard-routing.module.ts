/*
 * @Author: kaka
 * @Date: 2022-03-16 18:08:30
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-24 21:45:10
 */
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { OverviewComponent } from './overview/overview.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: 'overiew',
    component: OverviewComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: '',
    redirectTo: 'overiew',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: OverviewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}
