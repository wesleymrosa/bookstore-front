// src/app/components/views/livro/livro-read-text/livro-read-text.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { Livro } from '../livro-read-all/livro.model';


@Component({
  selector: 'app-livro-read-text',
  templateUrl: './livro-read-text.component.html',
  styleUrls: ['./livro-read-text.component.css']
})
export class LivroReadTextComponent implements OnInit {

  id_cat: string = '';
  id_livro: string = '';
  livro: Livro = {
    id: '',
    titulo: '',
    nome_autor: '',
    texto: ''
  };

  constructor(
    private route: ActivatedRoute,
    private service: LivroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
    this.id_livro = this.route.snapshot.paramMap.get('id_livro')!;
    this.service.findById(this.id_livro).subscribe((resposta) => {
      this.livro = resposta;
    });
  }

  voltar(): void {
    this.router.navigate([`/categorias/${this.id_cat}/livros`]);
  }
}
