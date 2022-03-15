import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { SnackBarContainer } from './components/snack-bar/snack-bar-container';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule
  ],
  declarations: [
    SnackBarContainer
  ],
  exports: [
    SnackBarContainer
  ],
  entryComponents: [
    SnackBarContainer
  ]
})
export class SharedModule { }
