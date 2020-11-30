import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/_modelos/categoria';
import { CategoriaService } from 'src/app/_servicos/categoria.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria = {} as Categoria;
  categorias: Categoria[];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(){
    this.categoriaService.getAll().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });
  }

  
    /*
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
    */
  

}
