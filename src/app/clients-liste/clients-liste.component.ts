import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; // Importer RouterModule et Router
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients-liste',
  standalone: true,
  templateUrl: './clients-liste.component.html',
  styleUrls: ['./clients-liste.component.css'],
  imports: [CommonModule, RouterModule] // Assurez-vous que RouterModule est bien importé
})
export class ClientsListeComponent implements OnInit {
  clients: any[] = [];
  selectedClientId: number | null = null;

  constructor(private clientsService: ClientsService, private router: Router) { } // Injecter Router

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientsService.getClients().subscribe(
      (data) => {
        if (data.pageItems && Array.isArray(data.pageItems)) {
          this.clients = data.pageItems;
        } else {
          console.error('Le format des données n\'est pas valide', data);
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des clients:', error);
      }
    );
  }

  // Méthode pour sélectionner un client et le supprimer de la liste

}
