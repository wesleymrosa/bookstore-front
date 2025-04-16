// src/app/components/views/categoria/categoria.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Categoria[]> {
    const url = `${this.baseUrl}/categorias`;
    return this.http.get<Categoria[]>(url);
  }

  create(categoria: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias`;
    return this.http.post<Categoria>(url, categoria);
  }

  findById(id: string): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias/${id}`;
    return this.http.get<Categoria>(url);
  }

  delete(id: string): Observable<void> {
    const url = `${this.baseUrl}/categorias/${id}`;
    return this.http.delete<void>(url);
  }

  update(categoria: Categoria): Observable<void> {
    const url = `${this.baseUrl}/categorias/${categoria.id}`;
    return this.http.put<void>(url, categoria);
  }  

  mensagem(msg: string): void {
    this._snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000
    });
  }
}
