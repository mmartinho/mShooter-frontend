import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { UsuarioService } from '../usuario/usuario.service';
import { environment } from '../../../environments/environment';
import { TokenOpaco } from '../token/token-opaco.interface';

const API = `${environment.apiHost}:${environment.apiPort}`;

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private refreshToken! : TokenOpaco;
  private authToken! : string;

  constructor(
    private http: HttpClient,
    private usuarioService : UsuarioService
  ) { }

  autenticar(email: string, senha: string) : Observable<any> {
    return this.http
      .post(`${API}/usuario/login`, {email, senha}, {observe: 'response'})
      .pipe(
        tap((res)=>{
          this.authToken = res.headers.get('Authorization') as string;
          this.refreshToken = res.body as TokenOpaco;
          this.usuarioService.login(this.authToken, this.refreshToken);
        })
      );
  }

  atualizar(refreshToken : string) : Observable<any> {
    return this.http
      .post(`${API}/usuario/atualizatoken`, {refreshToken}, {observe: 'response'})
      .pipe(
        tap((res)=>{
          this.authToken = res.headers.get('Authorization') as string;
          this.refreshToken = res.body as TokenOpaco;
          this.usuarioService.refresh(this.authToken, this.refreshToken);
        })
      );
  }
}
