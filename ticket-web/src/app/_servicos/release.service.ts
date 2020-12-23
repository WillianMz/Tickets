import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Release } from '../_modelos/release';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService extends BaseService {

  constructor(
    private http: HttpClient
  ) { super()}

  newRelease(release: Release): Observable<Release>{
    let response = this.http.post(this.urlAPIv1 + 'Projeto/Release/Novo', release, this.ObterHeaderJson()).pipe(
      map(this.extractDados),
      catchError(this.serviceError)
    );

    return response;
  }

  updateRelease(release: Release): Observable<Release>{
    let response = this.http.put(this.urlAPIv1 + 'Projetos/Release/Editar', release, this.ObterHeaderJson()).pipe(
      map(this.extractDados),
      catchError(this.serviceError)
    );

    return response;
  }

}
