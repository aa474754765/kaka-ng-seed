/*
 * @Author: kaka
 * @Date: 2022-03-19 15:34:01
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-19 15:34:02
 */
import { InjectionToken } from '@angular/core';

export const WindowToken = new InjectionToken<Window>('Window');
export function windowProvider() { return window; }
