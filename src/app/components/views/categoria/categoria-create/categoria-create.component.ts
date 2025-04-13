import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/component/views/categoria/categoria.models';
import { CategoriaService } from 'src/app/component/views/categoria/categoria.service';


@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.categoria).subscribe((resposta: Categoria) => {
      console.log(resposta);
    });
  }
}
