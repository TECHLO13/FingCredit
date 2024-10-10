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

  constructor(private router: Router) {}

  connexion() {
    if (this.username === 'adam' && this.password === 'nadia') {
      this.isLoggedIn = true;
      // alert(`Connexion réussie ! Bienvenue, ${this.username}`);
      this.router.navigate(['/listeclient']);
    } else {
      alert('Identifiants incorrects, veuillez réessayer.');
    }
  }
}
