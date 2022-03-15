/*
 * @Author: kaka
 * @Date: 2022-02-21 18:53:31
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-15 22:58:24
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutsModule } from '../layouts/layouts.module';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

const components = [
  PagesComponent,
  DashboardComponent,
  NotFoundComponent
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule, 
    LayoutsModule,
    PagesRoutingModule
  ],
  exports: [
    components
  ]
})
export class PagesModule { }
