import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Objeto } from '../objeto/objeto.class';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit, OnChanges {

  /**
   * Recebe a lista de objetos quaisquer
   */
  @Input()
  objetos: any[] = [];

  /**
   * Objetos rearrumados em uma lista 
   * com nome/valor
   */
  lista : Objeto[][] = [];

  /**
   * Propriedades comuns da lista de objetos
   */
  colunas : string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.colunas = [];
    this.lista = [];
    /**
     * Passa no primeiro objeto e "pega" as colunas
     */
    this.objetos.every(objeto => {
      Object.keys(objeto).forEach(coluna => {
        this.colunas.push(coluna);
      });
      return false;
    });
    /**
     * Para cada objeto, separe em uma lista de lista
     * de objetos com nome/valor
     */
    this.objetos.forEach(objeto => {
      var propriedades : Objeto[] = [];
      Object.keys(objeto).forEach(propriedade => {
        propriedades.push(new Objeto(propriedade, objeto[propriedade]));
      });
      this.lista.push(propriedades);
    });
  }

  ngOnInit(): void {

  }

}
