import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

import { Usuario } from './usuario.interface';
import { usuarioNull } from './usuario-null.object';
import { TokenOpaco } from '../token/token-opaco.interface';
import { AuthTokenService } from '../token/auth-token.service';
import { RefreshTokenService } from '../token/refresh-token.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  /**
   * Objeto que notifica o usuário logado
   */
  private usuarioSubject = new BehaviorSubject<Usuario>(usuarioNull);

  constructor(
    private authTokenService: AuthTokenService,
    private refreshTokenService: RefreshTokenService
  ) { 
    if(this.authTokenService.hasToken()) {
      this.notifica();
    }
  }

  /**
   * Lê o payload do token e converte para objeto Usuário
   * @returns Usuario|null
   */
  private decodifica() : Usuario|null {
    const token = this.authTokenService.getToken();
    var usuario = null;
    if(token) {
      usuario = jwtDecode(token) as Usuario;
    }
    return usuario;
  }

  /**
   * Notifica o serviço sobre qual usuário está logado
   */
  private notifica() {
    const usuario = this.decodifica();
    if(usuario) {
      this.usuarioSubject.next(usuario);
    } else {
      this.usuarioSubject.next(usuarioNull);
    }
  }

  /**
   * Altera qual usuário está logado
   * @param auth 
   * @param refresh Token
   */
  public login(auth: string, refresh: TokenOpaco) {
    this.authTokenService.setToken(auth);
    this.refreshTokenService.setToken(refresh.refreshToken);
    this.notifica();
  }

  /**
   * Remove o token, e emite usuário nulo
   */
  public logout() {
    this.authTokenService.removeToken();
    this.refreshTokenService.removeToken();
    this.usuarioSubject.next(usuarioNull);
  } 
  
  /** */
  public refresh(auth: string, refresh: TokenOpaco) {
    this.login(auth, refresh);
  }

  /**
   * Serviço de observação que retorna o usuário logado
   * @returns Observable<Usuario>
   */
  public getUsuario() : Observable<Usuario> {
    return this.usuarioSubject.asObservable();
  }
}
