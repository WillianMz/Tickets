import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/_modelos/categoria';
import { CategoriaService } from 'src/app/_servicos/categoria.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  //categoria = {} as Categoria;
  //categorias: Categoria[];
  categorias = [];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.getCategorias();
    this.categorias = [
      {'Id':1, 'Titulo':'Bugs',           'Descricao':'Teste de Descrição de Categoria'},
      {'Id':2, 'Titulo':'Implementação',  'Descricao':'Teste de Descrição de Categoria'},
      {'Id':3, 'Titulo':'Novos recursos', 'Descricao':'Teste de Descrição de Categoria'},
      {'Id':4, 'Titulo':'Atualização',    'Descricao':'Teste de Descrição de Categoria'},
      {'Id':5, 'Titulo':'Suporte',        'Descricao':'Teste de Descrição de Categoria'},
      {'Id':6, 'Titulo':'Desenvolvimento','Descricao':'Teste de Descrição de Categoria'},
      {'Id':7, 'Titulo':'Estoque',        'Descricao':'Teste de Descrição de Categoria'},
      {'Id':8, 'Titulo':'Financeiro',     'Descricao':'Teste de Descrição de Categoria'},
      {'Id':9, 'Titulo':'Comercial',      'Descricao':'Teste de Descrição de Categoria'},
      {'Id':10,'Titulo':'Treinamento',    'Descricao':'Teste de Descrição de Categoria'}
    ];
  }

  getCategorias(){
  //  this.categoriaService.getAll().subscribe((categorias: Categoria[]) => {
    //  this.categorias = categorias;
    //});
  }

    

}
