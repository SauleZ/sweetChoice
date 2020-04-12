import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CakesRoutingModule} from './cakes-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {CakesComponent} from "./cakes/cakes.component";
import {MatIconModule} from "@angular/material/icon";
import {CurrencyPipe} from "../currency.pipe";


@NgModule({
  declarations: [CakesComponent, CurrencyPipe],
  imports: [
    CommonModule,
    CakesRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CakesModule {
}
