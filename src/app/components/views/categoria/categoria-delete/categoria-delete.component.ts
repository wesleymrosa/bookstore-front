import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/component/views/categoria/categoria.service';
import { Categoria } from 'src/app/component/views/categoria/categoria.models';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  };

  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.findById(id).subscribe((resposta: Categoria) => {
        this.categoria = resposta;
      });
    }
  }

  delete(): void {
    if (this.categoria.id) {
      this.service.delete(this.categoria.id).subscribe(() => {
        this.service.mensagem('Categoria excluída com sucesso!');
        this.router.navigate(['categorias']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['categorias']);
  }
}
