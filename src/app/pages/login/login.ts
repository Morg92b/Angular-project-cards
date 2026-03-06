import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject, OnDestroy } from '@angular/core';
import { MatAnchor, MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LoginCredentials, LoginService } from '../../services/login/login';

@Component({
  selector: 'app-login',
  imports: [MatAnchor, ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnDestroy {

  private FormBuilder = inject(FormBuilder);
  private loginService = inject(LoginService);
  private router = inject(Router);

  private loginSubscription: Subscription | null = null;

  loginFormGroup = this.FormBuilder.group({
    'username': ['', [Validators.required]],
    'password': ['', [Validators.required]]
  });

  invalidCredentials = false;

  login() {
    this.loginSubscription = this.loginService.login(this.loginFormGroup.value as LoginCredentials).subscribe({
      next: () => this.navigateHome(),
      error: () => this.invalidCredentials = true
    });
  }

  navigateHome() {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }

}
