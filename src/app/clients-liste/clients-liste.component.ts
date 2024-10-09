import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients-liste',
  standalone: true,
  templateUrl: './clients-liste.component.html',
  styleUrls: ['./clients-liste.component.css'],
  imports: [CommonModule, RouterModule]
})
export class ClientsListeComponent implements OnInit {
  clients: any[] = [];
  selectedClientId: number | null = null;
  isModalOpen: boolean = false;

  constructor(private clientsService: ClientsService) {}

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

}
