import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { SnackBarContainer } from './components/snack-bar/snack-bar-container';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule
  ],
  declarations: [
    SnackBarContainer,
    NotFoundComponent
  ],
  exports: [
    SnackBarContainer
  ],
  entryComponents: [
    SnackBarContainer
  ]
})
export class SharedModule { }
