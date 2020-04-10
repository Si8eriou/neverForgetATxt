import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeverForgetATextRoutingModule } from './never-forget-atext-routing.module';
import { NeverForgetATextComponent } from './never-forget-atext/never-forget-atext.component';


@NgModule({
  declarations: [NeverForgetATextComponent],
  imports: [
    CommonModule,
    NeverForgetATextRoutingModule
  ]
})
export class NeverForgetATextModule { }
