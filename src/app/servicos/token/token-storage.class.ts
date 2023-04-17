export class TokenStorage {
  private key: string;

  constructor(key : string) {
    this.key = key;
  }

  /** */
  hasToken(): boolean {
    const token = this.getToken();
    return token !== null;
  }

  /** */
  setToken(token: string) {
    window.localStorage.setItem(this.key, token);
  }

  /** */
  getToken(): string|null {
    return window.localStorage.getItem(this.key);
  }

  /** */
  removeToken() {
    window.localStorage.removeItem(this.key);
  }
}