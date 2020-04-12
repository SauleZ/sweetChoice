import {Component, OnInit} from '@angular/core';
import {ListCakesService} from '../../../Services/list-cakes.service';
import {Basket} from "../../../advices/advices.component";
import {BasketService} from "../../../Services/basket.service";

@Component({
  selector: 'app-souffle-cakes',
  templateUrl: './souffle-cakes.component.html',
  styleUrls: ['./souffle-cakes.component.css']
})
export class SouffleCakesComponent implements OnInit {
  souffleCakes: any;
  cur = 'USD';

  // tslint:disable-next-line:variable-name
  constructor(private _service: ListCakesService,
              private _basketService: BasketService) {
  }

  ngOnInit(): void {
    this.getSouffleCakes();
  }

  getSouffleCakes() {
    this._service.getSouffleCakes().subscribe(res => {
      this.souffleCakes = res;
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
