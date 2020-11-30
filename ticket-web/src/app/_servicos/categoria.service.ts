import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Categoria } from '../_modelos/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  api = 'https://localhost:5001/api/Categoria/Listar';

  constructor(private httpClient: HttpClient) { }

  //headers
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  //obter todas as categorias
  getAll(): Observable<Categoria[]>{
    return this.httpClient.get<Categoria[]>(this.api)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }


    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };

}
