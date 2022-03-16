/*
 * @Author: kaka
 * @Date: 2022-03-16 18:08:30
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-16 18:24:47
 */
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { JsonComponent } from './json/json.component';

const routes: Routes = [
  {
    path: 'json',
    component: JsonComponent,
  },
  {
    path: '',
    redirectTo: 'json',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: JsonComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsRoutingModule {
}
