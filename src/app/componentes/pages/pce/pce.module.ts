import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PceComponent } from './pce/pce.component';
import { PcesComponent } from './pces/pces.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PceComponent,
    PcesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PceComponent,
    PcesComponent
  ]
})
export class PceModule { }
