/*
 * @Author: kaka
 * @Date: 2022-02-21 18:54:38
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-16 18:25:27
 */
import { Component, Input, OnInit } from '@angular/core';

import { NavigationNode } from 'src/app/services/navigation/navigation.model';

@Component({
  selector: 'kaka-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {

  @Input() nodes: NavigationNode[] = [
    {
      title: '图表',
      url: 'dashboard',
      tooltip: '图表'
    },
    {
      title: '工具',
      url: 'tools',
      tooltip: '自定义工具'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
