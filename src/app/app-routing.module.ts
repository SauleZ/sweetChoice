import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvicesComponent} from './advices/advices.component';
import {PastryComponent} from './pastry/pastry.component';
import {SignUpComponent} from "./sign-up/sign-up.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cakes',
    pathMatch: 'full'
  },
  {
    path: 'cakes',
    loadChildren: () => import('./cakes/cakes.module').then(m => m.CakesModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {path: 'pastry', component: PastryComponent},
  {path: 'advices', component: AdvicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [SignUpComponent]
})
export class AppRoutingModule { }
