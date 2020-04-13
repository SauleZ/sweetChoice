import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
              private FormB: FormBuilder,
              // tslint:disable-next-line:variable-name
              private  _service: AuthService,
              private router: Router) {
    this.form = this.FormB.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  login(){
    this._service.login(this.form.getRawValue().userName, this.form.getRawValue().password);
    if(this._service.login(this.form.getRawValue().userName, this.form.getRawValue().password)) {
      this.router.navigate(['../admin']);
    }
  }
  logout(){
    this._service.logout();
  }

}
