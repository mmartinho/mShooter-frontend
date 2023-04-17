import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Local } from '../../../servicos/local/local.interface';
import { LocalService } from 'src/app/servicos/local/local.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-locais',
  templateUrl: './locais.component.html',
  styleUrls: ['./locais.component.scss']
})
export class LocaisComponent implements OnInit {
  @Input() offset: number = 0;
  @Input() size: number = 5;

  locais : Local[] = [];
  qpaginas : number[] = [];
  erro : string = '';

  constructor(
    private local: LocalService
  ) { }

  private listaPaginas(start: number, stop: number, step: number) {
    return Array.from({ length: (stop - start) / step + 1} , (value, index) => start+index*step);
  }

  private getList() {
    this.local.lista(this.offset, this.size).subscribe({
      next : (paginada) => {
        this.locais = paginada.rows; 
        let tpaginas = Math.ceil(paginada.total / this.size); 
        this.qpaginas = this.listaPaginas(1,tpaginas,1); 
      },
      error : (err) => {
        this.erro = err.message;
      }
    });
  }

  ngOnInit(): void {
    this.getList();
  }

  /**
   * @param number pagina 
   */
  muda(pagina: number) {
    if(pagina > 0) {
      this.offset = this.size * (pagina - 1)
    } else {
      this.offset = 0;
    } 
    this.getList();
  }

}
