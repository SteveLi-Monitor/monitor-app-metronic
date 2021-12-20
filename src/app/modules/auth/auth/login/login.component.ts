import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonCommandsClient } from 'src/app/apis/common-commands.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(
    private commonCommandsClient: CommonCommandsClient,
    private authService: AuthService
  ) {
    this.getCompanies();
  }

  loginForm = new FormGroup({
    companyNumber: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  companies: {
    companyNumber: string;
    name: string;
  }[] = [];

  loginFormSubmitAttempt = false;

  isSigningIn = false;

  signInFailed = false;

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => x.unsubscribe());
  }

  onSubmit(): void {
    this.loginFormSubmitAttempt = true;
    this.signIn();
  }

  private getCompanies(): void {
    const subs = this.commonCommandsClient
      .getMonitorConfiguration()
      .subscribe((resp) => {
        this.companies = resp.companies;
      });

    this.subscriptions.push(subs);
  }

  private signIn(): void {
    if (this.loginForm.valid) {
      this.isSigningIn = true;

      const subs = this.authService.signIn(this.loginForm.value).subscribe({
        next: () => {
          console.log('success');
          this.isSigningIn = false;
          this.signInFailed = false;
        },
        error: (error) => {
          console.log(error);
          this.isSigningIn = false;
          this.signInFailed = true;
        },
      });

      this.subscriptions.push(subs);
    }
  }
}
