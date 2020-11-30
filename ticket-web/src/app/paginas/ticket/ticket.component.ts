import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets = []

  constructor() { }

  ngOnInit(): void {
  
    this.tickets = [
      {'Id':1, 'Titulo':'Teste','Descricao':'Descrição teste do ticket xnskjdfgskdjfghksdgjh','Categoria':'Teste','Criador':'Willian','DataAbertura':'30/11/2020','Status':'Aberto','Prioridade':'Normal'},
      {'Id':2, 'Titulo':'Teste','Descricao':'Descrição teste do ticket xnskjdfgskdjfghksdgjh','Categoria':'Teste','Criador':'Willian','DataAbertura':'30/11/2020','Status':'Aberto','Prioridade':'Normal'},
      {'Id':3, 'Titulo':'Teste','Descricao':'Descrição teste do ticket xnskjdfgskdjfghksdgjh','Categoria':'Teste','Criador':'Willian','DataAbertura':'30/11/2020','Status':'Aberto','Prioridade':'Normal'},
      {'Id':4, 'Titulo':'Teste','Descricao':'Descrição teste do ticket xnskjdfgskdjfghksdgjh','Categoria':'Teste','Criador':'Willian','DataAbertura':'30/11/2020','Status':'Aberto','Prioridade':'Normal'},
      {'Id':5, 'Titulo':'Teste','Descricao':'Descrição teste do ticket xnskjdfgskdjfghksdgjh','Categoria':'Teste','Criador':'Willian','DataAbertura':'30/11/2020','Status':'Aberto','Prioridade':'Normal'},
      {'Id':6, 'Titulo':'Teste','Descricao':'Descrição teste do ticket xnskjdfgskdjfghksdgjh','Categoria':'Teste','Criador':'Willian','DataAbertura':'30/11/2020','Status':'Aberto','Prioridade':'Normal'},
      {'Id':7, 'Titulo':'Teste','Descricao':'Descrição teste do ticket xnskjdfgskdjfghksdgjh','Categoria':'Teste','Criador':'Willian','DataAbertura':'30/11/2020','Status':'Aberto','Prioridade':'Normal'},
      {'Id':8, 'Titulo':'Teste','Descricao':'Descrição teste do ticket xnskjdfgskdjfghksdgjh','Categoria':'Teste','Criador':'Willian','DataAbertura':'30/11/2020','Status':'Aberto','Prioridade':'Normal'},
      {'Id':9, 'Titulo':'Teste','Descricao':'Descrição teste do ticket xnskjdfgskdjfghksdgjh','Categoria':'Teste','Criador':'Willian','DataAbertura':'30/11/2020','Status':'Aberto','Prioridade':'Normal'},
      {'Id':10,'Titulo':'Teste','Descricao':'Descrição teste do ticket xnskjdfgskdjfghksdgjh','Categoria':'Teste','Criador':'Willian','DataAbertura':'30/11/2020','Status':'Aberto','Prioridade':'Normal'},
      {'Id':11,'Titulo':'Teste','Descricao':'Descrição teste do ticket xnskjdfgskdjfghksdgjh','Categoria':'Teste','Criador':'Willian','DataAbertura':'30/11/2020','Status':'Aberto','Prioridade':'Normal'},
      {'Id':12,'Titulo':'Teste','Descricao':'Descrição teste do ticket xnskjdfgskdjfghksdgjh','Categoria':'Teste','Criador':'Willian','DataAbertura':'30/11/2020','Status':'Aberto','Prioridade':'Normal'}
    ];

  }

}

