// livro-update.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { Livro } from '../livro-read-all/livro.model';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {

  id_cat: string = '';
  id_livro: string = '';

  livro: Livro = {
    id: '',
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
    this.id_livro = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.id_livro).subscribe(res => {
      this.livro = res;
      this.titulo.setValue(this.livro.titulo);
      this.nome_autor.setValue(this.livro.nome_autor);
      this.texto.setValue(this.livro.texto);
    });
  }

  update(): void {
    this.livro.titulo = this.titulo.value!;
    this.livro.nome_autor = this.nome_autor.value!;
    this.livro.texto = this.texto.value!;

    this.service.update(this.livro).subscribe({
      next: () => {
        this.service.mensagem('Livro atualizado com sucesso!');
        this.router.navigate([`/categorias/${this.id_cat}/livros`]);
      },
      error: err => {
        this.service.mensagem('Não foi possível atualizar o livro nesse momento, tente mais tarde!');
        console.error(err);
      }
    });
  }

  cancel(): void {
    this.router.navigate([`/categorias/${this.id_cat}/livros`]);
  }

  getMessage(control: FormControl): string {
    if (control.hasError('required')) return 'Campo obrigatório';
    if (control.hasError('minlength')) return `O campo deve ter no mínimo ${control.getError('minlength').requiredLength} caracteres`;
    if (control.hasError('maxlength')) return `O campo deve ter no máximo ${control.getError('maxlength').requiredLength} caracteres`;
    return 'Campo inválido';
  }
}
