// src/app/components/views/livro/livro-read-all/livro-read-all.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit {

  livros: any[] = []; // substitua por tipo se houver model
  displayedColumns: string[] = ['id', 'título', 'livros', 'acoes'];
  dataSource: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Aqui você pode futuramente buscar os livros da categoria via service
    // Por enquanto, vamos simular:
    this.livros = [
      { id: 1, titulo: 'Angular para Ninjas' },
      { id: 2, titulo: 'Spring Boot na Veia' }
    ];
    this.dataSource = this.livros;
  }

  navegarParaCategoriaCreate(): void {
    const id_cat = this.route.snapshot.paramMap.get('id_cat');
    this.router.navigate([`categorias/${id_cat}/livros/create`]);
  }
}
