/*
 * @Author: kaka
 * @Date: 2022-03-15 13:45:10
 * @LastEditors: kaka
 * @LastEditTime: 2022-03-15 18:58:02
 */
import { OverlayRef } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { _SnackBarContainer } from './snack-bar-container';

const MAX_TIMEOUT = Math.pow(2, 31) - 1;

export class SnackBarRef<T> {

  containerInstance: _SnackBarContainer;

  private _durationTimeoutId: any;

  constructor(containerInstance: _SnackBarContainer,
    private _overlayRef: OverlayRef) {
    this.containerInstance = containerInstance;
    containerInstance._onExit.subscribe(() => this._finishDismiss());
  }

  dismiss(): void {
    this.containerInstance.exit();
    clearTimeout(this._durationTimeoutId);
  }

  _dismissAfter(duration: number): void {
    this._durationTimeoutId = setTimeout(() => this.dismiss(), Math.min(duration, MAX_TIMEOUT));
  }

  private _finishDismiss(): void {
    this._overlayRef.dispose();
  }

  afterOpened(): Observable<void> {
    return this.containerInstance._onEnter;
  }

  afterDismissed(): Observable<void> {
    return this.containerInstance._onExit;
  }
}
