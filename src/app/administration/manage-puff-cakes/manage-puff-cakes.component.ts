import { Component, OnInit } from '@angular/core';
import {ListCakesService} from "../../Services/list-cakes.service";
import {MatDialog} from "@angular/material/dialog";
import {UserDialogComponent} from "../dialog/user-dialog.component";

@Component({
  selector: 'app-manage-puff-cakes',
  templateUrl: './manage-puff-cakes.component.html',
  styleUrls: ['./manage-puff-cakes.component.css']
})
export class ManagePuffCakesComponent implements OnInit {

  puffCakes: any;

  constructor(private _service: ListCakesService,
              private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPuffCakes();
  }

  getPuffCakes() {
    this._service.getPuffCakes().subscribe(res => {
      this.puffCakes = res;
    },
      error => {
      console.error(error);
      });
  }

  deletePuffCake(id) {
    this._service.deletePuffCakes(id).subscribe(res => {
      this.getPuffCakes();
    },
      error => {
      console.error(error);
      });
  }

  updatePuffCake(cake: any) {
    this._dialog.open(UserDialogComponent, {
      width: '450px',
      data: cake
    }).afterClosed().subscribe(res => {
      this._service.updatePuffCakes(res).subscribe(result => {
        this.getPuffCakes();
      });
    });
  }

  createPuffCakes() {
    this._dialog.open(UserDialogComponent, {
      width: '450px',
    }).afterClosed().subscribe(res => {
      this._service.createPuffCakes(res).subscribe(result => {
        this.getPuffCakes();
        });
    });
  }

}
