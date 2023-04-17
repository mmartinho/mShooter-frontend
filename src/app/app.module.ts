import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SigninComponent } from './componentes/signin/signin.component';
import { SharedModule } from './componentes/shared/shared.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeComponent } from './componentes/home/home.component';
import { LocalComponent } from './componentes/local/local/local.component';
import { LocaisComponent } from './componentes/local/locais/locais.component';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    CabecalhoComponent,
    SigninComponent,
    HomeComponent,
    LocalComponent,
    LocaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
