import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpongeCakesComponent} from './sponge-cakes/sponge-cakes.component';


const routes: Routes = [
  {
    path: '',
    component: SpongeCakesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpongeCakesRoutingModule { }
