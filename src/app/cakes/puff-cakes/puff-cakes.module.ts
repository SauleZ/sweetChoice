import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuffCakesRoutingModule } from './puff-cakes-routing.module';
import { PuffCakesComponent } from './puff-cakes/puff-cakes.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [PuffCakesComponent],
    imports: [
        CommonModule,
        PuffCakesRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class PuffCakesModule { }
