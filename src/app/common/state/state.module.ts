import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgReduxModule, select } from '@angular-redux/store';
import { StateService } from './service/state.service';
import { StateDirective } from './directive/state.directive';

@NgModule({
  imports: [CommonModule, NgReduxModule],
  declarations: [StateDirective],
  exports: [StateDirective],
})
export class StateModule { }

export { StateService, select }
export { compose } from './function/compose';
