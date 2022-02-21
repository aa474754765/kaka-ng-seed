import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavigationComponent } from './navigation/navigation.component';

const components = [
  ToolbarComponent,
  NavigationComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    components
  ]
})
export class LayoutsModule { }
