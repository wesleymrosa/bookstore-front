import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './livro-read-all/livro.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.apiUrl;

  constructor(private http: HttpClient) {}

  findAllByCategoria(id_cat: String): Observable<Livro[]> {
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`;
    return this.http.get<Livro[]>(url);
  }
}
