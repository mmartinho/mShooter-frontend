import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocaisComponent } from './locais/locais.component';
import { LocalComponent } from './local/local.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    LocaisComponent,
    LocalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LocaisComponent,
    LocaisComponent
  ]
})
export class LocalModule { }
