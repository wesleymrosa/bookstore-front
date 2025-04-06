import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria } from '../categoria-read/categoria.models';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Categoria[]> {
    const url = `${this.baseUrl}/v1/categorias`;
    return this.http.get<Categoria[]>(url);
  }
}
