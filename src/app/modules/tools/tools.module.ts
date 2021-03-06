/*
 * @Author: kaka
 * @Date: 2022-03-16 18:06:56
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-16 18:17:46
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsRoutingModule } from './tools-routing.module';
import { JsonComponent } from './json/json.component';
import { EncodeDecodeComponent } from './encode-decode/encode-decode.component';


@NgModule({
  declarations: [
    JsonComponent,
    EncodeDecodeComponent
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }
