/*
 * @Author: kaka
 * @Date: 2022-02-21 18:23:30
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-24 22:07:04
 */
import { Component, OnInit } from '@angular/core';
import { NavigationNode } from './services/navigation/navigation.model';

import { NavigationService } from './services/navigation/navigation.service';

@Component({
  selector: 'kaka-root',
  template: `<div class="app">
  <kaka-toolbar [nodes]="topMenu"></kaka-toolbar>
  <div class="main">
    <mat-sidenav-container class="main-container">
      <mat-sidenav class="nav" mode="side" opened>
        <kaka-navigation [currentNodes]="sideMenu"></kaka-navigation>
      </mat-sidenav>
      <mat-sidenav-content>      
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  </div>
</div>`
})
export class AppComponent implements OnInit{
  
  title = 'magic';

  sideMenu: NavigationNode[] = [];
  topMenu: NavigationNode[] = [];

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.topMenu = this.navigationService.topMenuNodes;
    this.navigationService.currentNodes$.subscribe(nodes => {
      this.sideMenu = nodes;
    })
  }
}
