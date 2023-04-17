import { Injectable } from '@angular/core';
import { TokenStorage } from './token-storage.class';

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenService extends TokenStorage {
  constructor() {
    super('refreshToken');
  }
}
