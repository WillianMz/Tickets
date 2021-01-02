import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Ticket } from 'src/app/_modelos/ticket';
import { TicketService } from 'src/app/_servicos/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets: Ticket[];
  modalRef: BsModalRef;
  paginaAtual = 1;
  itensPorPagina = 10;

  constructor(
    private ticketService: TicketService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.listarTickets();
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  listarTickets(){
    this.ticketService.obterTodosOsTickets().subscribe(
      (result) => {
        this.tickets = result['dados'];
        console.log(this.tickets);
      }
    )
  }

}
