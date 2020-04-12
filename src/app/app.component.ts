import {Component} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {ManageUsersDialogComponent} from "./administration/manage-users-dialog/manage-users-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {UserService} from "./Services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataSource: any;
  constructor(private  _service: AuthService,
              private _dialog: MatDialog,
              private _service2: UserService) {
  }

  title = 'sweetChoice';

  logout() {
    this._service.logout();
  }

  create() {
    this._dialog.open(SignUpComponent, {
      width: '450px',
    }).afterClosed().subscribe(res => {
      this._service2.createUser(res).subscribe(result => {
        this._service2.getAllUers();
      });
    });
  }
  // getUsers() {
  //   this._service2.getAllUers().subscribe(res => {
  //     this.dataSource = res;
  //   });
  // }

}
