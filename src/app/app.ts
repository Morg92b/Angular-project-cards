import { LoginService } from './services/login/login';
import { Component, computed, effect, inject, model, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatToolbarModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private router = inject(Router);
  loginService = inject(LoginService);

  logout() {
        this.loginService.logout().subscribe({
            next: _ => { this.navigateToLogin(); },
            error: _ => { this.navigateToLogin(); }
        });
    }

    navigateToLogin() {
        this.router.navigate(['login']);
    }

    navigateHome() {
        this.router.navigate(['home']);
    }

}
