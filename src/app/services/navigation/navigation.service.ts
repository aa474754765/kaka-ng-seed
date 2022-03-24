/*
 * @Author: kaka
 * @Date: 2022-03-19 14:37:40
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-24 22:00:58
 */
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { LocationService } from '../location/location.service';
import { NavigationNode } from './navigation.model';

export const APP_MENU_TOKEN = new InjectionToken<NavigationNode[]>('app_menu')

@Injectable()
export class NavigationService {

  navigationNodes: NavigationNode[];

  currentNodes$: Observable<NavigationNode[]>;

  constructor(@Inject(APP_MENU_TOKEN) private appMenu: NavigationNode[], private locationService: LocationService) {
    this.currentNodes$ = this.getCurrentNodes(this.appMenu);
  }

  private getCurrentNodes(appMenu: NavigationNode[]): Observable<NavigationNode[]> {
    const currentNodes = this.locationService.currentUrl
      .pipe(
        map((result) => ({ topPath: result[0], subPath: result[1] })),
        map((result) => {
          return appMenu.find(node => node.url === result.topPath)?.children || [];
        }),
        shareReplay()
      )
    return currentNodes;
  }

}
