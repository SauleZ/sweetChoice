import { Component, OnInit } from '@angular/core';
import {ListCakesService} from '../../Services/list-cakes.service';
import {MatDialog} from '@angular/material/dialog';
import {UserDialogComponent} from '../dialog/user-dialog.component';

@Component({
  selector: 'app-manage-sponge-cakes',
  templateUrl: './manage-sponge-cakes.component.html',
  styleUrls: ['./manage-sponge-cakes.component.css']
})
export class ManageSpongeCakesComponent implements OnInit {

  spongeCakes: any;

  // tslint:disable-next-line:variable-name
  constructor(private _service: ListCakesService,
              // tslint:disable-next-line:variable-name
              private _dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getSpongeCakes();
  }

  getSpongeCakes() {
    this._service.getSpongeCakes().subscribe(res => {
        this.spongeCakes = res;
      },
      error => {
        console.error(error);
      });
  }

  deleteSpongeCakes(id) {
    this._service.deleteSpongeCake(id).subscribe(res => {
        this.getSpongeCakes();
      },
      error => {
        console.error(error);
      });
  }

  updateSpongeCakes(cake: any) {
    this._dialog.open(UserDialogComponent, {
      width: '450px',
      data: cake
    }).afterClosed().subscribe(res => {
      this._service.updateSpongeCake(res).subscribe(result => {
        this.getSpongeCakes();
      });
    });
  }

  createSpongeCakes() {
    this._dialog.open(UserDialogComponent, {
      width: '450px',
    }).afterClosed().subscribe(res => {
      this._service.createSpongeCake(res).subscribe(result => {
        this.getSpongeCakes();
      });
    });
  }


}
