import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/views/home/home.component';
import { CategoriaReadComponent } from './component/views/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from '@categoria/categoria-update/categoria-update.component';
import { LivroReadAllComponent } from './components/views/livro/livro-read-all/livro-read-all.component';
import { LivroReadTextComponent } from './components/views/livro/livro-read-text/livro-read-text.component';
import { LivroCreateComponent } from './components/views/livro/livro-create/livro-create.component';
import { LivroUpdateComponent } from './components/views/livro/livro-update/livro-update.component';
import { LivroDeleteComponent } from './components/views/livro/livro-delete/livro-delete.component';
import { LivroReadComponent } from './components/views/livro/livro-read/livro-read.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categorias', component: CategoriaReadComponent },
  { path: 'categorias/create', component: CategoriaCreateComponent },
  { path: 'categorias/delete/:id', component: CategoriaDeleteComponent },
  { path: 'categorias/update/:id', component: CategoriaUpdateComponent },
  { path: 'categorias/:id_cat/livros', component: LivroReadAllComponent },
  { path: 'categorias/:id_cat/livros/:id_livro/read', component: LivroReadTextComponent },
  { path: 'categorias/:id_cat/livros/create', component: LivroCreateComponent },
  { path: 'categorias/:id_cat/livros/:id/update', component: LivroUpdateComponent },
  { path: 'categorias/:id_cat/livros/:id/delete', component: LivroDeleteComponent },
  { path: 'categorias/:id_cat/livros/:id/read', component: LivroReadComponent }
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
