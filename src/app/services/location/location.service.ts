/*
 * @Author: kaka
 * @Date: 2022-03-19 15:48:41
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-19 16:18:34
 */
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { map, Subject } from 'rxjs';

@Injectable()
export class LocationService {

  private urlSubject = new Subject<string>();

  currentUrl = this.urlSubject.pipe(
    map(url => url.replace(/^\/+/, '').split('/'))
  );

  constructor(
    private location: Location
  ) {
    this.location.onUrlChange(() => {
      return this.urlSubject.next(location.path() || '')
    });
  }
}
