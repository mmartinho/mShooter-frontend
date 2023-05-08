import { Component, OnInit } from '@angular/core';

import { Local } from '../../../../servicos/local/local.interface';
import { LocalService } from '../../../../servicos/local/local.service';
import { Coluna } from '../../../shared/lista-prime/coluna.interface';
import { Colunas } from '../../../shared/lista-prime/colunas.class';

@Component({
  selector: 'app-locais',
  templateUrl: './locais.component.html',
  styleUrls: ['./locais.component.scss']
})
export class LocaisComponent implements OnInit {
  locais : Local[] = [];
  colunas: Coluna[] = [];
  total: number = 0;

  constructor(private localService: LocalService) { }

  carregarLocais($event: {offset:number, size:number} = {offset:0, size:5}) {
    this.localService.lista($event.offset, $event.size).subscribe((paginada) => {
      this.locais = paginada.rows;
      this.total = paginada.total;
      this.colunas = Colunas.definir(this.locais); 
    });
  }

  ngOnInit(): void {
    this.carregarLocais();
  }
}
