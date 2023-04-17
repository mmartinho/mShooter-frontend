import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicos/usuario/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

  constructor(
    public usuario : UsuarioService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.usuario.logout();
    this.router.navigate(['/']);
  }

  novoLocal() {
    if(this.usuario.logado()) {
      alert('Usuário Logado');
    } else {
      alert('Usuário não logado');
    }
  }

  locais() {

  }
}
