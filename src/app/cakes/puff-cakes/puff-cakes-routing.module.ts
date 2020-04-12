import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PuffCakesComponent} from "./puff-cakes/puff-cakes.component";


const routes: Routes = [
  {
    path: '',
    component: PuffCakesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuffCakesRoutingModule { }
