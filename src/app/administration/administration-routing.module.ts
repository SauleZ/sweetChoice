import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ManageCakesComponent} from './manage-cakes/manage-cakes.component';
import {ManageSouffleCakesComponent} from './manage-souffle-cakes/manage-souffle-cakes.component';
import {ManagePuffCakesComponent} from './manage-puff-cakes/manage-puff-cakes.component';
import {ManageSpongeCakesComponent} from './manage-sponge-cakes/manage-sponge-cakes.component';
import {UserDialogComponent} from './dialog/user-dialog.component';
import {ManageWeddingCakesComponent} from './manage-wedding-cakes/manage-wedding-cakes.component';
import {AuthGuard} from '../auth/auth.guard';
import {ManageUsersComponent} from './manage-users/manage-users.component';


const routes: Routes = [
  {
    path: '',
    component: ManageCakesComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'souffle', component: ManageSouffleCakesComponent},
      {path: 'puff', component: ManagePuffCakesComponent},
      {path: '', component: ManageSpongeCakesComponent},
      {path: 'wedding', component: ManageWeddingCakesComponent},
      {path: 'users', component: ManageUsersComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  entryComponents: [UserDialogComponent]
})
export class AdministrationRoutingModule {
}
