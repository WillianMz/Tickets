import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Categoria } from '../_modelos/categoria';
import { Icategoria } from '../_modelos/icategoria';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService{

  constructor(private http: HttpClient) { }

  
 // obterTodos(): Observable<Categoria[]>{
   // return this.http
     // .get<Categoria[]>(this.api + '/Categoria/Listar')
     // .pipe(catchError(super.serviceError));
 // }

  getAll(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>("https://localhost:5001/api/Categoria/Listar")
      .pipe(catchError(this.serviceError));
  }

  listAll(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>("http://localhost:5000/api/Categoria/Listar");
  }

  protected serviceError(response: Response | any) {
    let customError: string[] = [];
    let customResponse = { error: { errors: [] }}

    if (response instanceof HttpErrorResponse) {
        if (response.statusText === "Unknown Error") {
            customError.push("Ocorreu um erro desconhecido");
            response.error.errors = customError;
        }
    }

    if (response.status === 500) {
        customError.push("Ocorreu um erro no processamento, tente novamente mais tarde ou contate o nosso suporte."); 
        // Erros do tipo 500 não possuem uma lista de erros
        // A lista de erros do HttpErrorResponse é readonly                
        customResponse.error.errors = customError;
        return throwError(customResponse);
    }

    console.error(response);
    return throwError(response);
  }


}
