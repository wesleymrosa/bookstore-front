import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria/categoria.service';
import { Categoria } from '../categoria-read/categoria.models';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router'; // ✅ IMPORTAÇÃO CORRETA

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];
  dataSource = new MatTableDataSource<Categoria>();

  constructor(
    private service: CategoriaService,
    private router: Router // ✅ INJEÇÃO CORRETA
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      this.dataSource.data = resposta;
    });
  }

  navegarParaCategoriaCreate(): void {
    this.router.navigate(["categorias/create"]);
  }
}
