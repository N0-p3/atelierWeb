import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      passwordRepeat: new FormControl('', Validators.required)
    });
  }


  register(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: () => {
          this.snackBar.open('Enregistrement fait avec succès!', 'Nice!', { duration: 5000, panelClass: 'panel-success' });
          this.router.navigate(['/']);
        },
        error: () => {
          this.snackBar.open('L\'enregistrement fut erreur.', 'Désolé!', { duration: 5000, panelClass: 'panel-error' });
        }
      });
    }
  }
}
