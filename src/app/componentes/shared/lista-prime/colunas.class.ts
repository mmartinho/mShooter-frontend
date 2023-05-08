import { Coluna } from './coluna.interface';

export class Colunas {
  /**
   * @param lista
   * @returns Coluna[]
   */
  static definir(lista: Object[]): Coluna[] {
    var colunas : Coluna[] = [];
    lista.every((objeto) => {
      Object.keys(objeto).forEach((coluna) => {
        colunas.push({
          field: coluna,
          header: coluna.charAt(0).toUpperCase() + coluna.slice(1),
        });
      });
      return false;
    });
    return colunas;
  }
}