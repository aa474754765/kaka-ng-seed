import { ComponentRef, Injectable, Injector } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { SnackBarConfig } from './snack-bar-config';
import { SnackBarContainer, _SnackBarContainer } from './snack-bar-container';
import { SnackBarRef } from './snack-bar-ref';

@Injectable({ providedIn: 'root' })
export class SnackBar {

  _openedSnackBarRef!: SnackBarRef<any> | null;

  constructor(
    private _overlay: Overlay
  ) { }

  open(message: string, userConfig?: SnackBarConfig) {
    const config = { ...new SnackBarConfig(), ...userConfig };
    config.data = { message };
    this.create(config);
  }

  private create(userConfig?: SnackBarConfig) {
    const config = { ...new SnackBarConfig(), ...userConfig };
    const overlayRef = this._createOverlay(config);
    const container = this._attachSnackBarContainer(overlayRef, config);
    const snackBarRef = new SnackBarRef(container, overlayRef);

    this._animateSnackBar(snackBarRef, config);
    this._openedSnackBarRef = snackBarRef;

    return this._openedSnackBarRef;
  }

  private _createOverlay(config: SnackBarConfig): OverlayRef {
    const overlayConfig = new OverlayConfig();
    overlayConfig.direction = config.direction;

    let positionStrategy = this._overlay.position().global();
    // Set horizontal position.
    const isRtl = config.direction === 'rtl';
    const isLeft = (
      config.horizontalPosition === 'left' ||
      (config.horizontalPosition === 'start' && !isRtl) ||
      (config.horizontalPosition === 'end' && isRtl));
    const isRight = !isLeft && config.horizontalPosition !== 'center';
    if (isLeft) {
      positionStrategy.left('0');
    } else if (isRight) {
      positionStrategy.right('0');
    } else {
      positionStrategy.centerHorizontally();
    }
    // Set vertical position.
    if (config.verticalPosition === 'top') {
      positionStrategy.top('80px');
    } else if (config.verticalPosition === 'bottom') {
      positionStrategy.bottom('0');
    } else {
      positionStrategy.centerVertically();
    }

    overlayConfig.positionStrategy = positionStrategy;
    return this._overlay.create(overlayConfig);
  }

  private _attachSnackBarContainer(overlayRef: OverlayRef,
    config: SnackBarConfig): _SnackBarContainer {

    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = Injector.create({
      parent: userInjector,
      providers: [{ provide: SnackBarConfig, useValue: config }]
    });

    const containerPortal = new ComponentPortal(SnackBarContainer, config.viewContainerRef, injector);
    const containerRef: ComponentRef<_SnackBarContainer> = overlayRef.attach(containerPortal);
    containerRef.instance.snackBarConfig = config;
    return containerRef.instance;
  }

  private _animateSnackBar(snackBarRef: SnackBarRef<any>, config: SnackBarConfig) {
    // When the snackbar is dismissed, clear the reference to it.
    snackBarRef.afterDismissed().subscribe(() => {
      if (this._openedSnackBarRef == snackBarRef) {
        this._openedSnackBarRef = null;
      }
    });

    if (this._openedSnackBarRef) {
      // If a snack bar is already in view, dismiss it and enter the
      // new snack bar after exit animation is complete.
      this._openedSnackBarRef.afterDismissed().subscribe(() => {
        snackBarRef.containerInstance.enter();
      });
      this._openedSnackBarRef.dismiss();
    } else {
      // If no snack bar is in view, enter the new snack bar.
      snackBarRef.containerInstance.enter();
    }

    // If a dismiss timeout is provided, set up dismiss based on after the snackbar is opened.
    if (config.duration && config.duration > 0) {
      snackBarRef.afterOpened().subscribe(() => snackBarRef._dismissAfter(config.duration!));
    }
  }

}
