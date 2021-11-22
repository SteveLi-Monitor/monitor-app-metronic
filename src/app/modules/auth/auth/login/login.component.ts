import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  loginForm = new FormGroup({
    company: new FormControl(null, {
      updateOn: 'submit',
      validators: Validators.required,
    }),
    username: new FormControl(null, {
      updateOn: 'submit',
      validators: Validators.required,
    }),
    password: new FormControl(null, {
      updateOn: 'submit',
      validators: Validators.required,
    }),
  });

  loginFormSubmitAttempt = false;

  ngOnInit(): void {}

  onSubmit(): void {
    this.loginFormSubmitAttempt = true;
  }
}
