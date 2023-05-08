import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

import { Coluna } from './coluna.interface';
import { LazyLoad } from './lazy-load.interface';

@Component({
  selector: 'app-lista-prime',
  templateUrl: './lista-prime.component.html',
  styleUrls: ['./lista-prime.component.scss'],
})
export class ListaPrimeComponent implements OnInit {
  @Input() offset: number = 0;
  @Input() size: number = 5;
  @Input() objetos: Object[] = [];
  @Input() colunas: Coluna[] = [];
  @Input() total: number = 0;
  
  @Output() carregarObjetos: EventEmitter<LazyLoad> = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {}

  onLazyLoad(event: LazyLoadEvent) {
    this.offset = event.first ? event.first : 0;
    this.size = event.rows ? event.rows : 5;
    this.carregarObjetos.emit({
      offset: this.offset, 
      size: this.size
    });
  }
}
