import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeverForgetATextRoutingModule } from './never-forget-atext-routing.module';
import { NeverForgetATextComponent } from './never-forget-atext/never-forget-atext.component';
import {MatButtonModule} from "@angular/material/button";
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [NeverForgetATextComponent, ContactsComponent],
  imports: [
    CommonModule,
    NeverForgetATextRoutingModule,
    MatButtonModule
  ]
})
export class NeverForgetATextModule { }
