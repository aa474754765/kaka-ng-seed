/*
 * @Author: kaka
 * @Date: 2022-03-16 18:08:30
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-24 23:12:43
 */
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { JsonComponent } from './json/json.component';
import { EncodeDecodeComponent } from './encode-decode/encode-decode.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'json',
        component: JsonComponent,
      },
      {
        path: 'urlencode',
        component: EncodeDecodeComponent,
      }
    ]
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
