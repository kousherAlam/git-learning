import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicTopicsRoutingModule } from './basic-topics-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    BasicTopicsRoutingModule
  ]
})
export class BasicTopicsModule { }
