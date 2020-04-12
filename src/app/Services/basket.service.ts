import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
export class Basket {
  // cakeID: string;
  name: string;
  price: number;
  path: string;
}
@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basketList: Basket[] = [];
  constructor() { }

  getAllBasket() {
   return this.basketList;
  }

  delete(basket: Basket) {

    let index: number = this.basketList.indexOf(basket);
    this.basketList.splice(index, 1);
    return this.basketList;
  }

  add(basket: Basket){
    this.basketList.push(basket);
    return this.basketList;
  }

}
