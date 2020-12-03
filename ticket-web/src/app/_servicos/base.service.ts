import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  api = 'https://localhost:5001/api';

  protected ObterHeaderJson() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  protected extractData(response: any) {
    return response.dados || {};
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

