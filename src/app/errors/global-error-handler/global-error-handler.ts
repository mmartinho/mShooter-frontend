import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import * as StackTrace from 'stacktrace-js';

import { UsuarioService } from '../../servicos/usuario/usuario.service'
import { ServerLogService } from './server-log.service';

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

    handleError(error: any): void {
        /** 
         * Injetando as dependências via "injetor" ao invés
         * de usar a injeção no "construtor". Isso é porque não sabemos
         * que partes da aplicação estarão comprometidas, e é possível
         * que, em estado de Exceção, algumas das dependências não possam 
         * ser instanciadas 
         */
        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UsuarioService);
        const serverLogService = this.injector.get(ServerLogService);
        const router = this.injector.get(Router);

        const urlFromLocation = location instanceof PathLocationStrategy ? location.path() : '';

        /** 
         * Caso seja do tipo "Error", ele tem uma propriedade "message" 
         */
        const errorMessage = error.message ? error.message : error.toString();

        StackTrace.fromError(error).then(
            allStackFrames => {
                const stackAsString = allStackFrames.map(stackFrameItem => stackFrameItem.toString()).join('\n');
                const serverLog = { 
                    message : errorMessage, 
                    url : urlFromLocation, 
                    user : userService.getNomeUsuario(),
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
    }
    
}