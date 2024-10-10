import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;
  usernameError: string | null = null;
  passwordError: string | null = null;

  constructor(private router: Router) {}

  connexion() {

    this.usernameError = null;
    this.passwordError = null;

    if (this.username === 'adam' && this.password === 'nadia') {
      this.isLoggedIn = true;
      this.router.navigate(['/listeclient']);
    } else {
    
      if (this.username !== 'adam') {
        this.usernameError = 'Nom d\'utilisateur incorrect.';
      }
      if (this.password !== 'nadia') {
        this.passwordError = 'Mot de passe incorrect.';
      }
    }
  }
}
