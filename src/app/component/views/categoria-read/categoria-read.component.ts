import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria/categoria.service';
import { Categoria } from '../categoria-read/categoria.models';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];
  dataSource = new MatTableDataSource<Categoria>();

  constructor(private service: CategoriaService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      this.dataSource.data = resposta;
    });
  }
}
