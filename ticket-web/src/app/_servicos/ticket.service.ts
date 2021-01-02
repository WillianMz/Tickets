import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Ticket } from '../_modelos/ticket';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService extends BaseService {

constructor(private http: HttpClient) { 
  super()
}

obterTodosOsTickets(): Observable<Ticket[]>{
  return this.http.get<Ticket[]>(this.urlAPIv1 + 'Tickets/Listar').pipe(
    map(this.extractDados),
    catchError(this.serviceError)
  );
}

}
