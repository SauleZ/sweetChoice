import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  getAllRoles(): Observable<any> {
    return this._http.get('http://localhost:3000/roles');
  }
  createRole(role: any): Observable<any> {
    return  this._http.post('http://localhost:3000/roles', role);
  }
  deleteRole(id): Observable<any> {
    return this._http.delete('http://localhost:3000/roles/' + id);
  }
  updateRole(role: any) {
    return this._http.put('http://localhost:3000/roles/' + role.id, role);
  }

}
