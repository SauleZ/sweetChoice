import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ListCakesService} from '../../Services/list-cakes.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  new = false;
  form: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _dialog: MatDialogRef<UserDialogComponent>,
              // tslint:disable-next-line:variable-name
              @Inject(MAT_DIALOG_DATA) public _data: any,
              private FormB: FormBuilder,
              // tslint:disable-next-line:variable-name
              private _service: ListCakesService) {
    if(_data) {
      this.new = false;
      this.form = this.FormB.group({
        id: [_data.id, Validators.required],
        name: [_data.name, Validators.required],
        description: [_data.description, Validators.required],
        price: [_data.price, Validators.required],
        path: [_data.path, Validators.required],
      });
    } else {
      this.form = this.FormB.group({
        id: ['', Validators.required],
        name: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        path: ['', Validators.required],
      });
      this.new = true;
    }
  }

  ngOnInit(): void {
  }

  create() {
    this._dialog.close(this.form.getRawValue());
  }
  update() {
    this._dialog.close(this.form.getRawValue());
  }

}
