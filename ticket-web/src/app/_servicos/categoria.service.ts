import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../_modelos/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService{

  API = 'https://localhost:5001/api/Categoria';
  categoria: Categoria = new Categoria();

  constructor(private http: HttpClient) { }

  listarTodas(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.API + '/Listar');
  }

  filtarPorNome(nome: string): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.API}/Nome/${nome}`);
  }

  filtarPorID(id:number): Observable<Categoria>{
    return this.http.get<Categoria>(`${this.API}/ID/${id}`);
  }

  Adicionar(categoria: Categoria){
    return this.http.post(this.API + '/Adicionar', categoria);
  }


  Editar(categoria: Categoria){
    return this.http.put(this.API + '/Editar', categoria);
  }

}