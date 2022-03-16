/*
 * @Author: kaka
 * @Date: 2022-02-21 18:23:30
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-16 18:13:01
 */
import { Component } from '@angular/core';

@Component({
  selector: 'kaka-root',
  template: `<div class="app">
  <kaka-toolbar></kaka-toolbar>
  <div class="main">
      <router-outlet></router-outlet>
  </div>
</div>`
})
export class AppComponent {
  title = 'magic';
}
