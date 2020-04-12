import {Component, OnInit} from '@angular/core';
import {BasketService} from '../Services/basket.service';

export class Basket {
  cakeID: string;
  name: string;
  price: number;
  path: string;
}

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.css']
})
export class AdvicesComponent implements OnInit {

  basketList: any;

  constructor(private _service: BasketService) {
  }


  ngOnInit(): void {
    this.getAllBasket();
  }

  getAllBasket() {
    this.basketList = this._service.getAllBasket();
  }

  getPrice() {
    let temp = 0;
    for (let i = 0; i < this.basketList.length; i++) {
      // tslint:disable-next-line:radix
      temp += parseInt(this.basketList[i].price);
    }
    return temp;
  }

  deleteItemFromBasket(name, price, path) {
    let basket = new Basket();
    basket.name = name;
    basket.price = price;
    basket.path = path;
    this.basketList = this._service.delete(basket);
    this.ngOnInit();
  }
}


