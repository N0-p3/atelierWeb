import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Atelier_1';

  constructor(public authService: AuthService, private snackBar: MatSnackBar, private router: Router) {}

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.snackBar.open('Logout Successful', 'Alright!', { duration: 5000, panelClass: 'panel-success' });
        this.router.navigate(['/']);
      },
      error: () => {
        this.snackBar.open('Logout Unsuccessful, you\'re trapped forever >:)', 'I\'m scared!', { duration: 5000, panelClass: 'panel-error' });
      }
    });
  }
}
