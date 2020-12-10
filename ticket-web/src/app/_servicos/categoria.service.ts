import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Categoria } from '../_modelos/categoria';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

const urlAPI = 'https://localhost:5001/api/Categoria';

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
  
  NovaCategoria(categoria): Observable<Categoria>{
    return this.http.post<Categoria>(urlAPI + '/Adicionar', categoria, httpOptions).pipe(
      tap((categoria: Categoria) => console.log('Categoria adicionada')),
      catchError(this.handleError<Categoria>('NovaCategoria'))
    );
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




  //interceptar erros caso ocorra
  private handleError<T>(operation = 'operation', result?: T){
    return (error:any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }

}