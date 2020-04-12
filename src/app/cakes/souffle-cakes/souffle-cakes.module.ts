import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SouffleCakesRoutingModule } from './souffle-cakes-routing.module';
import { SouffleCakesComponent } from './souffle-cakes/souffle-cakes.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [SouffleCakesComponent],
    imports: [
        CommonModule,
        SouffleCakesRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class SouffleCakesModule { }
