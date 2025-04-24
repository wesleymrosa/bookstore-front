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
  livro: Livro = {
    titulo: '',
    nome_autor: '',
    texto: ''
  };

  titulo = new FormControl('', [Validators.minLength(3), Validators.maxLength(100), Validators.required]);
  nome_autor = new FormControl('', [Validators.minLength(3), Validators.maxLength(100), Validators.required]);
  texto = new FormControl('', [Validators.minLength(10), Validators.maxLength(2000000), Validators.required]);

  constructor(
    private service: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
  }

  create(): void {
    this.livro.titulo = this.titulo.value!;
    this.livro.nome_autor = this.nome_autor.value!;
    this.livro.texto = this.texto.value!;

    this.service.create(this.livro, this.id_cat).subscribe({
      next: () => {
        this.service.mensagem('Livro criado com sucesso!');
        this.router.navigate([`/categorias/${this.id_cat}/livros`]);
      },
      error: err => {
        if (err.error?.errors?.length) {
          for (let i = 0; i < err.error.errors.length; i++) {
            this.service.mensagem(err.error.errors[i].message);
          }
        } else {
          this.service.mensagem('Erro ao criar livro!');
          console.error(err);
        }
      }
    });
  }

  cancel(): void {
    this.router.navigate([`/categorias/${this.id_cat}/livros`]); // ✅ Redirecionamento correto
  }

  getMessage(control: FormControl): string {
    if (control.hasError('required')) return 'Campo obrigatório';
    if (control.hasError('minlength')) return `O campo deve ter no mínimo ${control.getError('minlength').requiredLength} caracteres`;
    if (control.hasError('maxlength')) return `O campo deve ter no máximo ${control.getError('maxlength').requiredLength} caracteres`;
    return 'Campo inválido';
  }
}
