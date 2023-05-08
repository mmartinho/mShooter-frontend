import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Pce } from './pce.interface';
import { AuthTokenService } from '../token/auth-token.service';
import { PcePaginated } from './pce-paginated.interface';

const API = `${environment.apiHost}:${environment.apiPort}`;

@Injectable({
  providedIn: 'root'
})
export class PceService {

  constructor(private http: HttpClient, private auth : AuthTokenService) {}

  buscarPorId(id: number): Observable<Pce> {
    return this.http.get<Pce>(`${API}/${id}`,{headers : this.auth.cabecalho()});
  }

  lista(offset: number=0, size: number=5): Observable<PcePaginated> {
    return this.http.get<PcePaginated>(`${API}/pce/paginada/${offset}/${size}`, {headers: this.auth.cabecalho()});
  }
}
