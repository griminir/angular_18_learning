import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAPIRespondsModel } from '../model/Interface/APIResponsModel';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getDesignations():Observable<IAPIRespondsModel> {
    return this.http.get<IAPIRespondsModel>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation')
  }
}
