import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';

import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    CabecalhoComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule,
    TabViewModule,
    MegaMenuModule,
    InputTextModule,
    PanelModule
  ],
  exports: [
    CabecalhoComponent,
    RodapeComponent
  ], 
  bootstrap: [CabecalhoComponent]
})
export class BlocksModule { }
