import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-manage-users-dialog',
  templateUrl: './manage-users-dialog.component.html',
  styleUrls: ['./manage-users-dialog.component.css']
})
export class ManageUsersDialogComponent implements OnInit {
  user: any;
  new = false;
  form: FormGroup;
  roles = [];

  constructor(private _dialog: MatDialogRef<ManageUsersDialogComponent>,
  // tslint:disable-next-line:no-unused-expression
              @Inject(MAT_DIALOG_DATA) public _data: any, private formB: FormBuilder, private _service: UserService) {
    if (_data) {
      this.new = false;
      this.form = this.formB.group({
        id: [_data.id, Validators.required],
        userName: [_data.userName, Validators.required],
        password: [_data.password, Validators.required],
        // tslint:disable-next-line:radix
        roleID: [parseInt(_data.roleID), Validators.required]
      });
    } else {
      this.form = this.formB.group({
        userName: ['', Validators.required],
        password: ['', Validators.required],
        roleID: ['', Validators.required]
      });
      this.new = true;
    }
  }

  create() {
    this._dialog.close(this.form.getRawValue());
  }

  update() {
    this._dialog.close(this.form.getRawValue());
  }
  getRoles() {
    this._service.getAllRoles().subscribe(res => {
      this.roles = res;
    });
  }

  ngOnInit(): void {
    this.getRoles();
  }

}
