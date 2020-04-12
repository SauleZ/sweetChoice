import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CakesComponent} from './cakes/cakes.component';


const routes: Routes = [
  {
    path: 'spongeCakes',
    loadChildren: () => import('./sponge-cakes/sponge-cakes.module').then(m => m.SpongeCakesModule)
  },
  {
    path: 'weddingCakes',
    loadChildren: () => import('./wedding-cakes/wedding-cakes.module').then(m => m.WeddingCakesModule)
  },
  {
    path: 'souffleCakes',
    loadChildren: () => import('./souffle-cakes/souffle-cakes.module').then(m => m.SouffleCakesModule)
  },
  {
    path: 'puffCakes',
    loadChildren: () => import('./puff-cakes/puff-cakes.module').then(m => m.PuffCakesModule)
  },
  {
    path: '',
    component: CakesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CakesRoutingModule { }
