import {Component, OnInit} from '@angular/core';
import {ListCakesService} from '../../../Services/list-cakes.service';
import {BasketService} from '../../../Services/basket.service';
import {Basket} from '../../../advices/advices.component';

@Component({
    selector: 'app-puff-cakes',
    templateUrl: './puff-cakes.component.html',
    styleUrls: ['./puff-cakes.component.css']
})
export class PuffCakesComponent implements OnInit {

    // tslint:disable-next-line:variable-name
    constructor(private _service: ListCakesService,
                private _basketService: BasketService) {
    }
    puffCakes: any;

    // addItem(cakeID, name, price, path) {
    //   const item = new Basket(cakeID, name, price, path);
    //   this.itemsInBasket.push(item);
    // }
    cur = 'USD';

    ngOnInit(): void {
        this.getPuffCakes();
    }

    getPuffCakes() {
        this._service.getPuffCakes().subscribe(res => {
            this.puffCakes = res;
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

