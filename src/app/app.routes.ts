import { Routes } from '@angular/router';
import { ClientsListeComponent } from './clients-liste/clients-liste.component';
import { DetailsclientComponent } from './detailsclient/detailsclient.component';
import { LoginFormComponent } from './login-form/login-form.component';

export const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'listeclient', component: ClientsListeComponent },
  { path: 'details/:id', component: DetailsclientComponent }, 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
