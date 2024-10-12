import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simulationclient',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatStepperModule, MatFormFieldModule],
  templateUrl: './simulationclient.component.html',
  styleUrls: ['./simulationclient.component.css']
})
export class SimulationclientComponent implements OnInit {
  simulationData: any = {
    clientId: '9', // ID du client
    productId: 1, // ID du produit
    principal: 2000000, // Montant principal
    loanTermFrequency: 24, // Durée du prêt (en mois)
    loanTermFrequencyType: 2, // Type de fréquence de durée
    numberOfRepayments: 24, // Nombre de remboursements
    repaymentEvery: 1, // Remboursement tous les mois
    repaymentFrequencyType: 2, // Type de fréquence de remboursement
    interestRatePerPeriod: 4, // Taux d'intérêt par période
    amortizationType: 1, // Type d'amortissement
    isEqualAmortization: false, // Amortissement égal
    interestType: 0, // Type d'intérêt
    interestCalculationPeriodType: 1, // Période de calcul des intérêts
    allowPartialPeriodInterestCalcualtion: false, // Autoriser le calcul des intérêts pour période partielle
    transactionProcessingStrategyId: 1, // ID de la stratégie de traitement
    loanPurposeId: 24, // ID du but du prêt
    locale: 'fr',
    dateFormat: 'dd MMMM yyyy',
    loanType: 'individual',
    expectedDisbursementDate: '05 octobre 2024', // Date d'attente de décaissement
    submittedOnDate: '05 octobre 2024' // Date de soumission
  };

  private apiUrl = 'https://fingiciel.ngrok.io/fineract-provider/api/v1/loans';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Pas besoin de récupérer des données ici, car nous utilisons des données statiques pour la simulation
  }

  // Fonction pour soumettre les données de simulation (à supprimer si non nécessaire)
  simulateLoan(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(this.apiUrl, this.simulationData, { headers }).subscribe(
      (response) => {
        console.log('Simulation de prêt réussie', response);
        // Ici, tu peux gérer la réponse, par exemple, afficher un message de succès
      },
      (error) => {
        console.error('Erreur lors de la simulation du prêt', error);
        // Ici, tu peux gérer les erreurs
      }
    );
  }
}
