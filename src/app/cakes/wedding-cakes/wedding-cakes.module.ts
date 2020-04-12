import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeddingCakesRoutingModule } from './wedding-cakes-routing.module';
import { WeddingCakesComponent } from './wedding-cakes/wedding-cakes.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [WeddingCakesComponent],
    imports: [
        CommonModule,
        WeddingCakesRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class WeddingCakesModule { }
