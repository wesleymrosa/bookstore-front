import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/component/views/categoria/categoria.service';
import { Categoria } from 'src/app/component/views/categoria/categoria.models';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  };

  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && typeof id === 'string') {
      this.categoria.id = id;
      this.findById();
    } else {
      console.error('ID não encontrado');
      this.router.navigate(['/categorias']);
    }
  }

  findById(): void {
    if (this.categoria.id) {
      this.service.findById(this.categoria.id).subscribe((resposta: Categoria) => {
        this.categoria.nome = resposta.nome;
        this.categoria.descricao = resposta.descricao;
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/categorias']);
  }
}
