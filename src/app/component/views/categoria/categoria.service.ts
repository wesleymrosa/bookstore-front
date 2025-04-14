import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria } from '../categoria-read/categoria.models';
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

  mensagem(msg: string): void {
    window.alert(msg); // ou substitua por MatSnackBar se quiser
    this._snack.open('${str}', 'OK',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
