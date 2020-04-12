import {Component, OnInit} from '@angular/core';
import {ListCakesService} from "../../Services/list-cakes.service";
import {MatDialog} from "@angular/material/dialog";
import {UserDialogComponent} from "../dialog/user-dialog.component";

@Component({
  selector: 'app-manage-wedding-cakes',
  templateUrl: './manage-wedding-cakes.component.html',
  styleUrls: ['./manage-wedding-cakes.component.css']
})
export class ManageWeddingCakesComponent implements OnInit {
  weddingCakes: any;

  constructor(private _service: ListCakesService,
              private _dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getWeddingCakes();
  }

  getWeddingCakes() {
    this._service.getWeddingCakes().subscribe(res => {
        this.weddingCakes = res;
      },
      error => {
        console.error(error);
      });
  }

  deleteWeddingCakes(id: any) {
    this._service.deleteWeddingCakes(id).subscribe(res => {
      this.getWeddingCakes();
    }, error => {
      console.error(error);
    });
  }

  updateWeddingCakes(cake: any) {
    this._dialog.open(UserDialogComponent, {
      width: '450px',
      data: cake
    }).afterClosed().subscribe(res => {
      this._service.updateWeddingCakes(res).subscribe(result => {
        this.getWeddingCakes();
      });
    });
  }

  createWeddingCakes() {
    this._dialog.open(UserDialogComponent, {
      width: '450px',
    }).afterClosed().subscribe(res => {
      this._service.createWeddingCakes(res).subscribe(result => {
        this.getWeddingCakes();
      });
    });
  }

}
