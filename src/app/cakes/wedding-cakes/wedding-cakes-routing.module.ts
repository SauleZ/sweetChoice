import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeddingCakesComponent} from './wedding-cakes/wedding-cakes.component';


const routes: Routes = [
  {
    path: '',
    component: WeddingCakesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeddingCakesRoutingModule { }
