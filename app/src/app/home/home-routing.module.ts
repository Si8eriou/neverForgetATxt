import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "../auth/login/login.component";
import {HomeComponent} from "./home.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
