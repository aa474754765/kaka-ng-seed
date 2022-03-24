/*
 * @Author: kaka
 * @Date: 2022-03-16 18:06:36
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-16 18:11:18
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewComponent } from './overview/overview.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    OverviewComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
