import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Detailservice } from '../services/detailservice.service';
@Component({
  selector: 'app-detailsclient',
  standalone: true,
  templateUrl: './detailsclient.component.html',
  styleUrls: ['./detailsclient.component.css'],
  imports: [CommonModule, RouterModule]
})
export class DetailsclientComponent implements OnInit {
  clientDetails: any;
  clientAccounts: any;
  clientSummary: any[] = [];

  constructor(private detailService: Detailservice, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const clientId = Number(this.route.snapshot.paramMap.get('id'));


    this.detailService.getClientDetails(clientId).subscribe((data: any) => {
      this.clientDetails = data;
    });


    this.detailService.getClientAccounts(clientId).subscribe((data: any) => {
      this.clientAccounts = data;
    });

    this.detailService.getClientSummary(clientId).subscribe((data: any) => {
      if (data && data.length > 0) {
        this.clientSummary = data;
      } else {
        console.log('Aucun résumé trouvé');
      }
    });
  }
}
