import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';

import { UsuarioService } from '../../../servicos/usuario/usuario.service';
import { Usuario } from '../../../servicos/usuario/usuario.interface';
import { usuarioNull } from 'src/app/servicos/usuario/usuario-null.object';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  items: MegaMenuItem[] = [];
  usuario: Usuario = usuarioNull;

  logado(): boolean {
    return this.usuario.id !== 0;
  }

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  setMenuItems() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/'],
      },
      {
        label: (this.logado() ? this.usuario.nome : 'Usuário'),
        icon: 'pi pi-fw pi-users',
        items: [
          [
            {
              label: 'Acesso',
              items: [
                {
                  label: 'Login',
                  routerLink: ['/login'],
                  visible: !this.logado()
                },
                {
                  label: 'Logout',
                  command: (event) => {
                    this.usuarioService.logout();
                    this.ngOnInit();
                    this.router.navigate(['/']);
                  },
                  visible: this.logado()
                },
              ],
            },
          ],
        ],
      },
      {
        label: 'Entidades',
        icon: 'pi pi-fw pi-sitemap',
        visible: this.logado(),
        items: [
          [
            {
              label: 'Todos',
              items: [
                {
                  label: 'Locais',
                  routerLink: ['/local'],
                },
                {
                  label: 'PCEs',
                  routerLink: ['/pce'],
                },
              ],
            },
          ],
        ],
      },
    ];    
  }

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe(usuario => {
      this.usuario = usuario;
      this.setMenuItems();
    })
  }
}
