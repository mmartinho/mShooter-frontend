import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { TokenStorage } from './token-storage.class';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService extends TokenStorage{
  constructor() {
    super('authorizationToken');
  }

  cabecalho() {
    return new HttpHeaders().append('Authorization', 'Bearer '+this.getToken());    
  }
}
