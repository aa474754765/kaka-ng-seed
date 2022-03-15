/*
 * @Author: kaka
 * @Date: 2022-03-15 10:50:56
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-15 22:56:11
 */
import { ViewContainerRef, InjectionToken } from '@angular/core';
import { AriaLivePoliteness } from '@angular/cdk/a11y';
import { Direction } from '@angular/cdk/bidi';


export type SnackBarHorizontalPosition = 'start' | 'center' | 'end' | 'left' | 'right';

export type SnackBarVerticalPosition = 'top' | 'bottom' | 'center';

export type SnackBarType = 'info' | 'success' | 'warning' | 'danger';

/**
 * Configuration used when opening a snack-bar.
 *
 *
 */
export class SnackBarConfig<D = any> {

    viewContainerRef?: ViewContainerRef;

    duration?: number = 5000;

    direction?: Direction;

    panelClass?: string | string[];

    data?: D | null = null;

    horizontalPosition?: SnackBarHorizontalPosition = 'right';

    verticalPosition?: SnackBarVerticalPosition = 'top';

    type?: SnackBarType = 'info';
}
