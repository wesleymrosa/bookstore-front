import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { Livro } from '../livro-read-all/livro.model';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  id_cat: string = '';

  titulo = new FormControl("", [Validators.minLength(3)]);
  nome_autor = new FormControl("", [Validators.minLength(3)]);
  texto = new FormControl("", [Validators.minLength(10)]);

  constructor(
    private service: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
  }

  create(): void {
    const livro: Livro = {
      titulo: this.titulo.value!,
      nome_autor: this.nome_autor.value!,
      texto: this.texto.value!
    };

    this.service.create(livro, this.id_cat).subscribe(() => {
      this.router.navigateByUrl(`/categorias/${this.id_cat}/livros`);
      this.service.mensagem('Livro criado com sucesso!');
    }, err => {
      this.router.navigateByUrl(`/categorias/${this.id_cat}/livros`);
      this.service.mensagem('Erro ao criar novo livro! Tente mais tarde.');
    });
  }

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
