import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../Services/user.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  private roleID: 2;

  constructor(private _dialog: MatDialogRef<SignUpComponent>,
              // tslint:disable-next-line:no-unused-expression
              @Inject(MAT_DIALOG_DATA) public _data: any, private formB: FormBuilder, private _service: UserService) {
    this.form = this.formB.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      roleID: [2]
    });
  }

  ngOnInit(): void {
  }

  create() {
    this._dialog.close(this.form.getRawValue());
  }

}
