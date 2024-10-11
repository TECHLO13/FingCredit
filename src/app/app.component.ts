import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginFormComponent } from './login-form/login-form.component';
import { RechercheComponent } from './recherche/recherche.component';
import { CreationdossierComponent } from './creationdossier/creationdossier.component';
import { FOrmEmpruntfirstComponent } from './form-empruntfirst/form-empruntfirst.component';
import { FormEmpruntsecondComponent } from './form-empruntsecond/form-empruntsecond.component';
import { FormEmpruntThirdComponent } from './form-emprunt-third/form-emprunt-third.component';
import { ClientsListeComponent } from './clients-liste/clients-liste.component';
import { DetailsclientComponent } from './detailsclient/detailsclient.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { SimulationclientComponent } from './simulationclient/simulationclient.component';
// import { FormsModule } from '@angular/forms'; // Nécessaire pour utiliser [(ngModel)]
import { MatStepperModule } from '@angular/material/stepper'; // Pour le stepper
// import { MatInputModule } from '@angular/material/input'; // Pour les champs de saisie
// import { MatButtonModule } from '@angular/material/button'; // Pour les boutons
import { MatFormFieldModule } from '@angular/material/form-field'; // Pour les champs de formulaire
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatStepperModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
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
    CommonModule,
    SimulationclientComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Formulaire de connexion';
}
