import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  users = [];
  isAdmin = false;

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient,
              // tslint:disable-next-line:variable-name
              private _service: UserService) {
    this.getAllUsers();
  }

  getAllUsers() {
    this._service.getAllUers().subscribe(res => {
      this.users = res;
    });
  }

  login(username, password) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userName === username && this.users[i].password === password) {
        if (this.users[i].roleID == 1) {
          this.isLoggedIn = true;
          localStorage.setItem('userName', this.users[i].userName);
        } else {
          alert("1)You are not admin. \n 2)Login or password is wrong");
        }
      }
    }
    return true;
  }

  // adminLogin(username, password) {
  //   for (let i = 0; i < this.users.length; i++) {
  //     if (this.users[i].roleID === '1' && this.users[i].userName === username && this.users[i].password === password) {
  //       this.isAdmin = true;
  //       localStorage.setItem('userName', this.users[i].userName);
  //     }
  //   }
  // }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('userName');
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (localStorage.getItem('userName')) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }

}
