import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Categoria } from '../_modelos/categoria';
import { RetornoAPI } from '../_modelos/retornoAPI';
import { BaseService } from './base.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

const urlAPI = 'https://localhost:5001/api/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends BaseService{

  API = 'https://localhost:5001/api/Categoria';
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
    console.log(response);
    return response;
  }
  
  
  
  listarTodas(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.API + '/Listar');
  }


  NovaCategoria(categoria): Observable<Categoria>{
    return this.http.post<Categoria>(urlAPI + '/Adicionar', categoria, httpOptions).pipe(
      tap((categoria: Categoria) => {
        console.log(categoria);
      }),
      catchError(this.handleError<Categoria>('NovaCategoria'))
    );
  }

  
  getById(id: Number):any{
    console.log(id);
    return this.http.get(this.API + '/ID?id='+id).toPromise();
  }

  filtarPorNome(nome: string): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.API}/Nome/${nome}`);
  }

  Adicionar(categoria: Categoria){
    return this.http.post(this.API + '/Adicionar', categoria);
  }


  Editar(categoria: Categoria){
    return this.http.put(this.API + '/Editar', categoria);
  }



  //interceptar erros caso ocorra
  private handleError<T>(operation = 'operation', result?: T){
    return (error:any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }

}