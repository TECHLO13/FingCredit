import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detailsclient',
  standalone: true,
  templateUrl: './detailsclient.component.html',
  styleUrls: ['./detailsclient.component.css'],
  imports: [CommonModule]
})
export class DetailsclientComponent implements OnInit {
  clientId: number | null = null; 
  clientDetails: any = null;

  private jsonData = {
    "totalFilteredRecords": 26,
    "pageItems": [{
      "id": 1,
      "accountNo": "000000001",
      "externalId": "1234",
      "status": {
        "id": 300,
        "code": "clientStatusType.active",
        "value": "Active"
      },
      "subStatus": {
        "active": false,
        "mandatory": false
      },
      "active": true,
      "activationDate": [2020, 5, 21],
      "firstname": "Madjey",
      "lastname": "MENSAH",
      "displayName": "Madjey MENSAH",
      "mobileNo": "0613289117",
      "dateOfBirth": [2020, 5, 5],
      "gender": {
        "active": false,
        "mandatory": false
      },
      "clientType": {
        "active": false,
        "mandatory": false
      },
      "clientClassification": {
        "active": false,
        "mandatory": false
      },
      "isStaff": false,
      "officeId": 1,
      "officeName": "Agence centrale siège",
      "imageId": 1,
      "imagePresent": true,
      "timeline": {
        "submittedOnDate": [2020, 5, 20],
        "submittedByUsername": "mifos",
        "submittedByFirstname": "App",
        "submittedByLastname": "Administrator",
        "activatedOnDate": [2020, 5, 21],
        "activatedByUsername": "mifos",
        "activatedByFirstname": "App",
        "activatedByLastname": "Administrator"
      },
      "legalForm": {
        "id": 1,
        "code": "legalFormType.person",
        "value": "PERSON"
      },
      "clientNonPersonDetails": {
        "constitution": {
          "active": false,
          "mandatory": false
        },
        "mainBusinessLine": {
          "active": false,
          "mandatory": false
        }
      }
    }]
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.clientId = +params['id'];
      this.loadClientDetails();
    });
  }

  loadClientDetails(): void {
    const client = this.jsonData.pageItems.find(item => item.id === this.clientId);
    this.clientDetails = client || { message: 'Pas d\'information détaillée trouvée pour cet utilisateur.' };
  }
}
