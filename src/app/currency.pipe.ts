import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(price: number, currency: string): unknown {
    if (currency === 'USD') {
      return Math.round(price / 427.85) + '$';
    } else if (currency === 'KZT'){
      return  price + 'tg';
    }
  }

}
