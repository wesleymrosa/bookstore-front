import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];

  dataSource = [
    { id: 1, nome: 'Romance', descricao: 'Histórias de amor', acoes: 'Editar' },
    { id: 2, nome: 'Tecnologia', descricao: 'Livros sobre TI', acoes: 'Editar' },
    { id: 3, nome: 'Aventura', descricao: 'Exploração e ação', acoes: 'Editar' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
