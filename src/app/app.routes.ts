import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListeComponent } from './clients-liste/clients-liste.component';
import { DetailsclientComponent } from './detailsclient/detailsclient.component';

const routes: Routes = [
  { path: '', component: ClientsListeComponent },
  { path: 'details', component: DetailsclientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
