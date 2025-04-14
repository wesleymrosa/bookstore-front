import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private service: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  create(): void {
    const novaCategoria = {
      nome: this.categoria.nome,
      descricao: this.categoria.descricao
    };

    this.service.create(novaCategoria).subscribe({
      next: (resposta: Categoria) => {
        this.service.mensagem('Categoria criada com sucesso!');
        this.router.navigate(['categorias']);
      },
      error: err => {
        if (err.error?.errors?.length) {
          for (let i = 0; i < err.error.errors.length; i++) {
            this.service.mensagem(err.error.errors[i].message);
          }
        } else {
          this.service.mensagem('Erro ao criar categoria!');
          console.error(err);
        }
      }
    });
  }
}
