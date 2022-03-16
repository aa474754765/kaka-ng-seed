/*
 * @Author: kaka
 * @Date: 2022-02-21 18:23:30
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-16 18:12:26
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'tools', loadChildren: () => import('./modules/tools/tools.module').then(m => m.ToolsModule) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
