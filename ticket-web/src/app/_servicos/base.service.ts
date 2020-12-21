import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  protected  urlAPIv1 = 'https://localhost:5001/api/';

  protected ObterHeaderJson(){
    return {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
  }

  protected extractDados(response: any){
    return response.dados || {};
  }

  protected serviceError(response: Response | any){
    let erros: string[] = [];

    if(response instanceof HttpErrorResponse){
      if(response.statusText === "Unknown Error"){
        erros.push("Ocorreu um erro desconhecido");
        response.error.dados = erros;
      }
    }

    console.error(response);
    return throwError(response);

  }

}
