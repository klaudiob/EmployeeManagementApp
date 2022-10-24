import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ManagerDirective } from './directives/manager.directive';
import { PositionUppercasedPipe } from './pipes/position-uppercased.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    ManagerDirective,
    PositionUppercasedPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ManagerDirective,
    PositionUppercasedPipe
  ]
})
export class SharedModule { }
