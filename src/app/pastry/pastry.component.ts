import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BasketService} from "../Services/basket.service";


@Component({
  selector: 'app-pastry',
  templateUrl: './pastry.component.html',
  styleUrls: ['./pastry.component.css']
})
export class PastryComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder,
              private _service: BasketService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  buy(){
    alert("You orser is accepted! Our operator will call you.");
      this._service.basketList = [];
  }
}
