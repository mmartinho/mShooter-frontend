import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Objeto } from './objeto.class';

/**
 * Recebe um objeto qualquer (any), e dinamicamente
 * separa suas propriedades/valores para serem 
 * exibidos em um Painel vertical responsivo
 */
@Component({
  selector: 'app-objeto',
  templateUrl: './objeto.component.html',
  styleUrls: ['./objeto.component.scss']
})
export class ObjetoComponent implements OnInit, OnChanges {

  /**
   * Qualquer objeto com ao menos 1 propriedade
   */
  @Input()
  objeto : any;

  /**
   * As propriedades do objeto separadas em
   * um array de Objetos nome da propriedade/valor
   */
  propriedades : Objeto[] = [];

  constructor() {}
  
  ngOnChanges(changes: SimpleChanges): void {
    /** 
     * Para cada propriedade do objeto, crie um novo
     * Objeto com nome da propriedade/valor para serem 
     * iterados no html com ngFor
     */
    Object.keys(this.objeto).forEach(propriedade => {
      this.propriedades.push(new Objeto(propriedade, this.objeto[propriedade]));
    }); 
  }

  ngOnInit(): void {
  }

}
