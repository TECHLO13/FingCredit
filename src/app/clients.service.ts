import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private apiUrl = 'https://fingiciel.ngrok.io/fineract-provider/api/v1/clients?limit=15&offset=0&tenantIdentifier=default';
  private username = 'adam';
  private password = 'nadia';

  constructor(private http: HttpClient) {}

  getClients(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(`${this.username}:${this.password}`)
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }
}
