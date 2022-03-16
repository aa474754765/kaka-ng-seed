/*
 * @Author: kaka
 * @Date: 2022-02-21 18:53:25
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-16 18:23:39
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';

const components = [
  ToolbarComponent,
  NavigationComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    components
  ]
})
export class LayoutsModule { }
