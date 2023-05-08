import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LocalModule } from './local/local.module';
import { PceModule } from './pce/pce.module';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    LocalModule,
    PceModule
  ],
  exports : [
    HomeComponent
  ]
})
export class PagesModule { }
