// src/app/components/views/livro/livro-read/livro-read.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro-read-all/livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

  livro: Livro = {
    id: '',
    titulo: '',
    nome_autor: '',
    texto: ''
  };

  id_cat: string = '';

  constructor(
    private service: LivroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    if (id) {
      this.service.findById(id).subscribe((res) => {
        this.livro = res;
      });
    }
  }

  voltar(): void {
    this.router.navigate([`/categorias/${this.id_cat}/livros`]);
  }
}
