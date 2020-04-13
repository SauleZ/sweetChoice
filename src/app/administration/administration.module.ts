import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { ManageCakesComponent } from './manage-cakes/manage-cakes.component';
// @ts-ignore
import { UserDialogComponent } from './dialog/user-dialog.component';
import { ManageSpongeCakesComponent } from './manage-sponge-cakes/manage-sponge-cakes.component';
import { ManageWeddingCakesComponent } from './manage-wedding-cakes/manage-wedding-cakes.component';
import { ManageSouffleCakesComponent } from './manage-souffle-cakes/manage-souffle-cakes.component';
import { ManagePuffCakesComponent } from './manage-puff-cakes/manage-puff-cakes.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageUsersDialogComponent } from './manage-users-dialog/manage-users-dialog.component';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [ManageCakesComponent, UserDialogComponent, ManageSpongeCakesComponent, ManageWeddingCakesComponent, ManageSouffleCakesComponent, ManagePuffCakesComponent, ManageUsersComponent, ManageUsersDialogComponent],
    imports: [
        CommonModule,
        AdministrationRoutingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatInputModule,
        MatPaginatorModule,
        MatIconModule,
        FormsModule
    ]
})
export class AdministrationModule { }
