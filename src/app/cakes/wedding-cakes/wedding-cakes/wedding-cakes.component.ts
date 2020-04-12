import { Component, OnInit } from '@angular/core';
import {ListCakesService} from "../../../Services/list-cakes.service";
import {Basket} from "../../../advices/advices.component";
import {BasketService} from "../../../Services/basket.service";

@Component({
  selector: 'app-wedding-cakes',
  templateUrl: './wedding-cakes.component.html',
  styleUrls: ['./wedding-cakes.component.css']
})
export class WeddingCakesComponent implements OnInit {
  weddingCakes: any;
  cur = 'USD';

  constructor(private _service: ListCakesService,
              private _basketService: BasketService) { }

  ngOnInit(): void {
    this.getWeddingCakes();
  }

  getWeddingCakes(){
    this._service.getWeddingCakes().subscribe(res => {
      this.weddingCakes = res;
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
