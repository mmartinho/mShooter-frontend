import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Local } from './local.interface';
import { AuthTokenService } from '../token/auth-token.service';
import { LocalPaginated } from './local-paginated.interface';

const API = `${environment.apiHost}:${environment.apiPort}`;

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http: HttpClient, private auth : AuthTokenService) {}

  buscarPorId(id: number): Observable<Local> {
    return this.http.get<Local>(`${API}/${id}`,{headers : this.auth.cabecalho()});
  }

  lista(offset: number=0, size: number=5): Observable<LocalPaginated> {
    return this.http.get<LocalPaginated>(`${API}/local/paginada/${offset}/${size}`, {headers: this.auth.cabecalho()});
  }
}
