import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Projeto } from '../_modelos/projeto';
import { Release } from '../_modelos/release';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class ProjetoService extends BaseService{

  //projeto: Projeto = new Projeto();

  constructor(private http: HttpClient) {
    super();    
  }

  obterProjetos(): Observable<Projeto[]>{
    return this.http.get<Projeto[]>(this.urlAPIv1 + 'Projetos/Listar').pipe(
      map(this.extractDados),
      catchError(this.serviceError)
    );
  }

  createProjeto(projeto: Projeto): Observable<Projeto>{
    let response = this.http.post(this.urlAPIv1 + 'Projetos/Novo', projeto, this.ObterHeaderJson()).pipe(
      map(this.extractDados),
      catchError(this.serviceError)
    );

    return response;
  }

  updateProjeto(projeto: Projeto): Observable<Projeto>{
    let response = this.http.put(this.urlAPIv1 + 'Projetos/Editar', projeto, this.ObterHeaderJson()).pipe(
      map(this.extractDados),
      catchError(this.serviceError)
    );

    return response;
  }

  getById(id: number): Observable<Projeto>{
    return this.http.get<Projeto[]>(this.urlAPIv1 + 'Projetos/ID?id='+id, this.ObterHeaderJson()).pipe(
      map(this.extractDados),
      catchError(this.serviceError)
    );
  }

}
