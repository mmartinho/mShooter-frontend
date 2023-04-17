import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AutenticacaoService } from 'src/app/servicos/autenticacao/autenticacao.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  fromUrl: string = '';
  loginForm! : FormGroup;
  erro: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private autenticacao : AutenticacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe({next: (params)=>{this.fromUrl = params['fromUrl']}});
    this.loginForm = this.formBuilder.group({
      email : ['marcus_martinho@hotmail.com', Validators.required],
      senha : ['FordEscort', Validators.required]
    });
  }

  login() {
    const email = this.loginForm.get('email')?.value;
    const senha = this.loginForm.get('senha')?.value;

    if(email && senha) {
      this.autenticacao.autenticar(email, senha).subscribe({
        next: (resposta)=>{
          this.router.navigate(['']);
        },
        error: (error)=> {
          if(error.message) {
            this.erro = error.message;
          } else {
            alert('Ocorreu um erro. Veja o console para deltalhes');
            console.log(error);
          }
        }
      });
    }
  }

}
