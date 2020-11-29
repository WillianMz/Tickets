import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias = [];
  pagina: Number = 1;
  cont: Number = 5;

  constructor() { 

    this.categorias = [
      {'id':1, 'titulo':'Bugs',           'descricao':'Teste de Descrição de Categoria'},
      {'id':2, 'titulo':'Implementação',  'descricao':'Teste de Descrição de Categoria'},
      {'id':3, 'titulo':'Novos recursos', 'descricao':'Teste de Descrição de Categoria'},
      {'id':4, 'titulo':'Atualização',    'descricao':'Teste de Descrição de Categoria'},
      {'id':5, 'titulo':'Suporte',        'descricao':'Teste de Descrição de Categoria'},
      {'id':6, 'titulo':'Desenvolvimento','descricao':'Teste de Descrição de Categoria'},
      {'id':7, 'titulo':'Estoque',        'descricao':'Teste de Descrição de Categoria'},
      {'id':8, 'titulo':'Financeiro',     'descricao':'Teste de Descrição de Categoria'},
      {'id':9, 'titulo':'Comercial',      'descricao':'Teste de Descrição de Categoria'},
      {'id':10,'titulo':'Treinamento',    'descricao':'Teste de Descrição de Categoria'}
    ];

  }

  ngOnInit(): void {
  }

  

}
