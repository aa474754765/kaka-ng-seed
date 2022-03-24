/*
 * @Author: kaka
 * @Date: 2022-02-21 18:23:30
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-24 21:32:02
 */
import { NgModule } from '@angular/core';

import { PortalModule } from '@angular/cdk/portal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutsModule } from './layouts/layouts.module';
import { APP_MENU_TOKEN, NavigationService } from './services/navigation/navigation.service';
import { windowProvider, WindowToken } from './shared/window';
import { APP_MENU_DATA } from './services/navigation/navigation.model';
import { LocationService } from './services/location/location.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutsModule,
    PortalModule,
    AppRoutingModule,
    MatSidenavModule
  ],
  providers: [
    NavigationService,
    LocationService,
    { provide: WindowToken, useFactory: windowProvider },
    { provide: APP_MENU_TOKEN, useValue: APP_MENU_DATA },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
