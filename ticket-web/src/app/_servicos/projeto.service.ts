import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projeto } from '../_modelos/projeto';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'applicaiton/json'})
};



@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  API = 'https://localhost:5001/api/Projetos';
  projeto: Projeto = new Projeto();

  constructor(private http: HttpClient) { }

  listar(): Observable<Projeto[]>{
    return this.http.get<Projeto[]>(this.API + '/Listar');
  }

  Editar(projeto: Projeto){
    return this.
  }
}
