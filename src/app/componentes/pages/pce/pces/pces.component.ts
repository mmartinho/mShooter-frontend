import { Component, Input, OnInit } from '@angular/core';
import { PceService } from '../../../../servicos/pce/pce.service';
import { Pce } from 'src/app/servicos/pce/pce.interface';
import { Coluna } from '../../../shared/lista-prime/coluna.interface';
import { Colunas } from '../../../shared/lista-prime/colunas.class';

@Component({
  selector: 'app-pces',
  templateUrl: './pces.component.html',
  styleUrls: ['./pces.component.scss'],
})
export class PcesComponent implements OnInit {
  pces: Pce[] = [];
  colunas: Coluna[] = [];
  total: number = 0;
  
  constructor(private pceService: PceService) {}

  carregarPces($event: {offset:number, size:number} = {offset:0, size:5}) {
    this.pceService.lista($event.offset, $event.size).subscribe((paginada) => {
      this.pces = paginada.rows;
      this.total = paginada.total;
      this.colunas = Colunas.definir(this.pces); // [{field: 'id', header: 'ID'}, {field: 'nome', header: 'Nome'}, {field: 'calibre', header: 'Calibre'}];
    });
  }

  ngOnInit(): void {
    this.carregarPces();
  }
}
