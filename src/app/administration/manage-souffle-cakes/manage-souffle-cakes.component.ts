import { Component, OnInit } from '@angular/core';
import {ListCakesService} from '../../Services/list-cakes.service';
import {MatDialog} from '@angular/material/dialog';
import {UserDialogComponent} from '../dialog/user-dialog.component';

@Component({
  selector: 'app-manage-souffle-cakes',
  templateUrl: './manage-souffle-cakes.component.html',
  styleUrls: ['./manage-souffle-cakes.component.css']
})
export class ManageSouffleCakesComponent implements OnInit {
  souffleCakes: any;

  constructor(private _service: ListCakesService,
              private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.getSouffleCakes();
  }
  getSouffleCakes() {
    this._service.getSouffleCakes().subscribe(res => {
        this.souffleCakes = res;
      },
      error => {
        console.error(error);
      });
  }

  deleteSouffleCakes(id) {
    this._service.deleteSouffleCakes(id).subscribe(res => {
        this.getSouffleCakes();
      },
      error => {
        console.error(error);
      });
  }

  updateSouffleCakes(cake: any) {
    this._dialog.open(UserDialogComponent, {
      width: '450px',
      data: cake
    }).afterClosed().subscribe(res => {
      this._service.updateSouffleCakes(res).subscribe(result => {
        this.getSouffleCakes();
      });
    });
  }

  createSouffleCakes() {
    this._dialog.open(UserDialogComponent, {
      width: '450px',
    }).afterClosed().subscribe(res => {
      this._service.createSouffleCakes(res).subscribe(result => {
        this.getSouffleCakes();
      });
    });
  }

}
