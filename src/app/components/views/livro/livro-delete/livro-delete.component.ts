// livro-delete.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { Livro } from '../livro-read-all/livro.model';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent implements OnInit {

  id_cat: string = '';
  livro: Livro = {
    id: '',
    titulo: '',
    nome_autor: '',
    texto: ''
  };

  constructor(
    private service: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.livro.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.livro.id!).subscribe(res => {
      this.livro = res;
    });
  }

  delete(): void {
    this.service.delete(this.livro.id!).subscribe({
      next: () => {
        this.service.mensagem('Livro removido com sucesso!');
        this.router.navigate([`/categorias/${this.id_cat}/livros`]);
      },
      error: err => {
        this.service.mensagem('Não foi possível remover o livro. Tente novamente mais tarde.');
        console.error(err);
      }
    });
  }

  cancel(): void {
    this.router.navigate([`/categorias/${this.id_cat}/livros`]);
  }
}
