import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Categoria } from '../_modelos/categoria';
import { BaseService } from './base.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends BaseService{

  categoria: Categoria = new Categoria();

  constructor(private http: HttpClient) { super(); }

  obterCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.urlAPIv1 + 'Categoria/Listar').pipe(
      map(this.extractDados),
      catchError(super.serviceError));
  }

  createCategoria(categoria: Categoria) : Observable<Categoria>{
    let response = this.http.post(this.urlAPIv1 + 'Categoria/Adicionar', categoria, this.ObterHeaderJson()).pipe(
      map(this.extractDados),
      catchError(this.serviceError)
    );
    return response;
  }

  updateCategoria(categoria: Categoria): Observable<Categoria>{
    let response = this.http.put(this.urlAPIv1 + 'Categoria/Editar', categoria, this.ObterHeaderJson()).pipe(
      map(this.extractDados),
      catchError(this.serviceError)
    );

    return response;
  }
  

  Editar(categoria: Categoria){
    return this.http.put(this.urlAPIv1 + 'Categoria/Editar', categoria);
  }
  
  getById(id: Number):any{
    console.log(id);
    return this.http.get(this.urlAPIv1 + 'Categoria/ID?id='+id).toPromise();
  }

  filtarPorNome(nome: string): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.urlAPIv1}Categoria/Nome/${nome}`);
  }

  Adicionar(categoria: Categoria){
    return this.http.post(this.urlAPIv1 + 'Categoria/Adicionar', categoria);
  }


  



  //interceptar erros caso ocorra
  private handleError<T>(operation = 'operation', result?: T){
    return (error:any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }

}