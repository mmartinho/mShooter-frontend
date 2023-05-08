import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';

import { VmessageComponent } from './vmessage/vmessage.component';
import { ObjetoComponent } from './objeto/objeto.component';
import { ListaComponent } from './lista/lista.component';
import { ListaPrimeComponent } from './lista-prime/lista-prime.component';

@NgModule({
  declarations: [
    VmessageComponent,
    ObjetoComponent,
    ListaComponent,
    ListaPrimeComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TableModule
  ],
  exports: [
    VmessageComponent,
    ObjetoComponent, 
    ListaComponent,
    ListaPrimeComponent
  ]
})
export class SharedModule { }
