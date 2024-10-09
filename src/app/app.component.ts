import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RechercheComponent } from './recherche/recherche.component';
import { CreationdossierComponent } from './creationdossier/creationdossier.component';
import { FOrmEmpruntfirstComponent } from './form-empruntfirst/form-empruntfirst.component';
import { FormEmpruntsecondComponent } from './form-empruntsecond/form-empruntsecond.component';
import { FormEmpruntThirdComponent } from './form-emprunt-third/form-emprunt-third.component';
import { ClientsListeComponent } from './clients-liste/clients-liste.component';
import { DetailsclientComponent } from './detailsclient/detailsclient.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginFormComponent,
    RechercheComponent,
    CreationdossierComponent,
    FOrmEmpruntfirstComponent,
    FormEmpruntsecondComponent,
    FormEmpruntThirdComponent,
    ClientsListeComponent,
    DetailsclientComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Formulaire de connexion';
}
