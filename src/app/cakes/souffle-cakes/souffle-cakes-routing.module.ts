import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SouffleCakesComponent} from './souffle-cakes/souffle-cakes.component';


const routes: Routes = [
  {
    path: '',
    component: SouffleCakesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SouffleCakesRoutingModule { }
