import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpongeCakesRoutingModule } from './sponge-cakes-routing.module';
import { SpongeCakesComponent } from './sponge-cakes/sponge-cakes.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [SpongeCakesComponent],
    imports: [
        CommonModule,
        SpongeCakesRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class SpongeCakesModule { }
