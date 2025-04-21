import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {
  titulo = new FormControl("", [Validators.minLength(3)]);
  nome_autor = new FormControl("", [Validators.minLength(3)]);
  texto = new FormControl("", [Validators.minLength(10)]);

  constructor() { }

  ngOnInit(): void {}

  getMessage(campo: FormControl): string | false {
    if (campo === this.titulo && campo.invalid) {
      return "O campo TÍTULO deve conter entre 3 e 100 caracteres";
    }
  
    if (campo === this.nome_autor && campo.invalid) {
      return "O campo NOME DO AUTOR deve conter entre 3 e 100 caracteres";
    }
  
    if (campo === this.texto && campo.invalid) {
      return "O campo TEXTO deve conter entre 10 e 2.000.000 caracteres";
    }
  
    return false;
  }
  
}
