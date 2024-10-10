import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Detailservice {

  private username = 'adam';
  private password = 'nadia';

  constructor(private http: HttpClient) {}


  getClientDetails(clientId: number): Observable<any> {
    const url = `https://fingiciel.ngrok.io/fineract-provider/api/v1/clients/${clientId}?&tenantIdentifier=default`;
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${this.username}:${this.password}`)
    });
    return this.http.get<any>(url, { headers }).pipe(
      tap(data => console.log('Client Details:', data)),
      catchError(this.handleError<any>('getClientDetails'))
    );
  }


  getClientAccounts(clientId: number): Observable<any> {
    const url = `https://fingiciel.ngrok.io/fineract-provider/api/v1/clients/${clientId}/accounts?&tenantIdentifier=default`;
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${this.username}:${this.password}`)
    });
    return this.http.get<any>(url, { headers }).pipe(
      tap(data => console.log('Client Accounts:', data)),
      catchError(this.handleError<any>('getClientAccounts'))
    );
  }


getClientSummary(clientId: number): Observable<any> {
  const url = `https://fingiciel.ngrok.io/fineract-provider/api/v1/runreports/ClientSummary?R_clientId=${clientId}&genericResultSet=false&tenantIdentifier=default`;
  const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${this.username}:${this.password}`)
  });
  return this.http.get(url, { headers }).pipe(
      tap(data => console.log('Résumé du client récupéré:', data)),
      catchError(error => {
          console.error('Erreur lors de la récupération du résumé du client:', error);
          return of(null);
      })
  );
}


  // Méthode de gestion des erreurs
  private handleError<T>(operation = 'operation') {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of({} as T);
    };
  }
}
