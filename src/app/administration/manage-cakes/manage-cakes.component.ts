import { Component, OnInit } from '@angular/core';
import {ListCakesService} from '../../Services/list-cakes.service';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-manage-cakes',
  templateUrl: './manage-cakes.component.html',
  styleUrls: ['./manage-cakes.component.css']
})
export class ManageCakesComponent implements OnInit {

  constructor(private _service: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this._service.logout();
  }

}
