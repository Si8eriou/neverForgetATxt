import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NeverForgetATextComponent} from "./never-forget-atext/never-forget-atext.component";


const routes: Routes = [
  {
    path: '',
    component: NeverForgetATextComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeverForgetATextRoutingModule { }
