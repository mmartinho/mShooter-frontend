import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import * as StackTrace from 'stacktrace-js';
import jwtDecode from 'jwt-decode';

import { ServerLogService } from './server-log.service';
import { AuthTokenService } from '../../servicos/token/auth-token.service';
import { Usuario } from '../../servicos/usuario/usuario.interface';
import { usuarioNull } from '../../servicos/usuario/usuario-null.object';

/** 
 * Declaramos como "Injectable", sem escopo de 
 * provedor, pois, faremos gestão de dependência na
 * função de manipulação da exceção 
 */
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(
        /** 
         * Gestor de injeção de dependência necessário 
         */
        private injector: Injector
    ) { }

    /**
     * @returns Usuario
     */
    usuario(): Usuario {
        const authTokenService = this.injector.get(AuthTokenService);
        const token = authTokenService.getToken();
        var usuario = usuarioNull;
        if(token) {
          usuario = jwtDecode(token) as Usuario;
        }
        return usuario;
    }

    /**
     * @param any error 
     */
    handleError(error: any): void {
        const router = this.injector.get(Router);
        const location = this.injector.get(LocationStrategy);
        const urlFromLocation = location instanceof PathLocationStrategy ? location.path() : '';
        if(error instanceof Error) {
            const serverLogService = this.injector.get(ServerLogService);
            StackTrace.fromError(error).then(
                allStackFrames => {
                    const stackAsString = allStackFrames.map(stackFrameItem => stackFrameItem.toString()).join('\n');
                    const serverLog = { 
                        message : error.message, 
                        url : urlFromLocation, 
                        user : (this.usuario().id !== 0 ? this.usuario().nome : 'Desconhecido'),
                        stack : stackAsString
                    }
                    serverLogService.log(serverLog).subscribe( { 
                        complete: () => {
                            console.log('Erro registrado no backend da aplicação');
                        },
                        error: (error) => {
                            console.log(error.message)
                        },
                        next : (value) => {
                            router.navigate(['/error']);
                        }
                    });
                }
            );
        } else if(error instanceof HttpErrorResponse){
            if(error.status == 401) {
                router.navigate(['login']);
            } else {
                router.navigate(['/error']);
            }
        } else {
            router.navigate(['/error']);
        }
    }
    
}