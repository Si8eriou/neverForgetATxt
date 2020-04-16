import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NeverForgetATextComponent} from "./never-forget-atext/never-forget-atext.component";
import {ContactsComponent} from "./contacts/contacts.component";


const routes: Routes = [
  {
    path: '',
    component: NeverForgetATextComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeverForgetATextRoutingModule { }
