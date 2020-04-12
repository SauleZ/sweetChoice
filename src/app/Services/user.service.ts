import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {}

  getAllUersPage(query): Observable<any> {
    return this._http.get('http://localhost:3000/users' + query);
  }

  getAllUers(): Observable<any> {
    return this._http.get('http://localhost:3000/users');
  }

  createUser(user: any): Observable<any> {
    return this._http.post('http://localhost:3000/users', user);
  }

  updateUser(user: any) {
    return this._http.put('http://localhost:3000/users/' + user.id, user);
  }

  deleteUser(id) {
    return this._http.delete('http://localhost:3000/users/' + id);
  }
  getAllRoles(): Observable<any> {
    return this._http.get('http://localhost:3000/roles');
  }

}
