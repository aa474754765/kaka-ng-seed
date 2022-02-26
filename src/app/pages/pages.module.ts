import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    PagesRoutingModule,
    LayoutsModule
  ],
  exports: [
    components
  ]
})
export class PagesModule { }
