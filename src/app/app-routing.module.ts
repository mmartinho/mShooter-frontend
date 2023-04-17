import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';
import { HomeComponent } from './componentes/home/home.component';
import { SigninComponent } from './componentes/signin/signin.component';
import { LocalComponent } from './componentes/local/local/local.component';
import { LocaisComponent } from './componentes/local/locais/locais.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data : {
      title: 'Home'
    }
  },
  {
    path: 'login',
    component: SigninComponent,
    data: {
      title: 'Login de usuário'
    }
  },
  {
    path: 'local/:id',
    component: LocalComponent,
    data: {
      title: 'Local'
    }
  },  
  {
    path: 'local',
    component: LocaisComponent,
    data: {
      title: 'Lista de Locais'
    }
  },   
  { 
    path: 'not-found', 
    component: NotFoundComponent,
    data: {
      title: 'Não Encontrado'
    }          
  },  
  { 
    path: 'error', 
    component: GlobalErrorComponent,
    data: {
      title: 'Erro'
    }          
  }, 
  { 
    path: '**', 
    redirectTo: 'not-found' 
  }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
