import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { environment } from '../../environments/environment.development';
import { IAPIRespondsModel } from '../model/Interface/APIResponsModel';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAllClients(): Observable<IAPIRespondsModel> {
    return this.http.get<IAPIRespondsModel>(environment.API_URL + 'GetAllClients');
  }

  addUpdateClient(client: Client): Observable<IAPIRespondsModel> {
    return this.http.post<IAPIRespondsModel>(
      environment.API_URL + 'AddUpdateClient',
      client
    );
  }

  deleteClientById(id: number): Observable<IAPIRespondsModel> {
    return this.http.delete<IAPIRespondsModel>(
      environment.API_URL + 'DeleteClientByClientId?clientId=' + id
    );
  }
}
