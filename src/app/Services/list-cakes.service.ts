import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListCakesService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {
  }

  getSpongeCakes(): Observable<any> {
    return this._http.get('http://localhost:3000/spongeCakes');
  }

  createSpongeCake(cake: any): Observable<any> {
    return this._http.post('http://localhost:3000/spongeCakes', cake);
  }

  updateSpongeCake(cake: any): Observable<any> {
    return this._http.put('http://localhost:3000/spongeCakes/' + cake.id, cake);
  }

  deleteSpongeCake(id): Observable<any> {
    return this._http.delete('http://localhost:3000/spongeCakes/' + id);
  }



  // Wedding cakes manipulation

  getWeddingCakes(): Observable<any> {
    return this._http.get('http://localhost:3000/weddingCakes');
  }

  createWeddingCakes(cake: any): Observable<any> {
    return this._http.post('http://localhost:3000/weddingCakes', cake);
  }

  updateWeddingCakes(cake: any): Observable<any> {
    return this._http.put('http://localhost:3000/weddingCakes/' + cake.id, cake);
  }

  deleteWeddingCakes(id): Observable<any> {
    return this._http.delete('http://localhost:3000/weddingCakes/' + id);
  }


  // Souffle cakes manipulation

  getSouffleCakes(): Observable<any> {
    return this._http.get('http://localhost:3000/souffleCakes');
  }

  createSouffleCakes(cake: any): Observable<any> {
    return this._http.post('http://localhost:3000/souffleCakes', cake);
  }

  updateSouffleCakes(cake: any): Observable<any> {
    return this._http.put('http://localhost:3000/souffleCakes/' + cake.id, cake);
  }

  deleteSouffleCakes(id): Observable<any> {
    return this._http.delete('http://localhost:3000/souffleCakes/' + id);
  }


  // Puff cakes manipulation

  getPuffCakes(): Observable<any> {
    return this._http.get('http://localhost:3000/puffCakes');
  }

  createPuffCakes(cake: any): Observable<any> {
    return this._http.post('http://localhost:3000/puffCakes', cake);
  }

  updatePuffCakes(cake: any): Observable<any> {
    return this._http.put('http://localhost:3000/puffCakes/' + cake.id, cake);
  }

  deletePuffCakes(id): Observable<any> {
    return this._http.delete('http://localhost:3000/puffCakes/' + id);
  }

}
