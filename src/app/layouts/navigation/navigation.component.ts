/*
 * @Author: kaka
 * @Date: 2022-02-21 18:55:23
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-24 23:02:31
 */
import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { NavigationNode } from 'src/app/services/navigation/navigation.model';

@Component({
  selector: 'kaka-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationItemComponent implements OnInit ,OnChanges{

  @Input() menuItem: NavigationNode;
  @Input() level = 0;
  isExpanded = false;
  classes: {[index: string]: boolean };

  nodeChildren: NavigationNode[];

  constructor() { }
  
  ngOnInit(): void {
    this.nodeChildren = this.menuItem && this.menuItem.children || [];
  }

  ngOnChanges(): void {
    this.setClasses();
  }

  setClasses() {
    this.classes = {
      ['level-' + this.level]: true
    };
  }

}

@Component({
  selector: 'kaka-navigation',
  template: `
    <kaka-navigation-item *ngFor="let node of currentNodes" [menuItem]="node"></kaka-navigation-item>
  `,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() currentNodes: NavigationNode[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
