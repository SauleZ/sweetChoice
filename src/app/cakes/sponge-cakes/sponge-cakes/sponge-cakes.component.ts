import { Component, OnInit } from '@angular/core';
import {ListCakesService} from '../../../Services/list-cakes.service';
import {Basket} from "../../../advices/advices.component";
import {BasketService} from "../../../Services/basket.service";

@Component({
  selector: 'app-sponge-cakes',
  templateUrl: './sponge-cakes.component.html',
  styleUrls: ['./sponge-cakes.component.css']
})
export class SpongeCakesComponent implements OnInit {

  spongeCakes: any;
  cur = 'USD';

  // tslint:disable-next-line:variable-name
  constructor(private _service: ListCakesService,
              private _basketService: BasketService) { }

  ngOnInit(): void {
    this.getSpongeCakes();
  }

  getSpongeCakes() {
    this._service.getSpongeCakes().subscribe(res => {
      this.spongeCakes = res;
    });
  }

  addItem(name, price, path) {
    const basket = new Basket();
    basket.name = name;
    basket.price = price;
    basket.path = path;
    this._basketService.add(basket);
  }

  changeCurrency() {
    if (this.cur === 'USD') {
      this.cur = 'KZT';
    } else if (this.cur === 'KZT') {
      this.cur = 'USD';
    }
  }

}
