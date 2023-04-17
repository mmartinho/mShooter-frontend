import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VmessageComponent } from './vmessage/vmessage.component';
import { ObjetoComponent } from './objeto/objeto.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    VmessageComponent,
    ObjetoComponent,
    ListaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VmessageComponent,
    ObjetoComponent, 
    ListaComponent
  ]
})
export class SharedModule { }
