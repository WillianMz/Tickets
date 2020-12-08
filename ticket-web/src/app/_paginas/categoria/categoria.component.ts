import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/_modelos/categoria';
import { CategoriaService } from 'src/app/_servicos/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias: Categoria[];
  mensagem: string;
  sucesso: boolean;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {    
    this.listCategorias();
  }

  getCategorias(){
    this.categoriaService.listarTodas().subscribe(
      (catg: Categoria[]) => {
        this.categorias = catg;
        console.log(this.categorias);
      },
      error => {
        console.log('Erro ao carregar categorias' + {error});
      }
    )
  }

  listCategorias(){
    this.categoriaService.listarTodas().subscribe(
      (categorias) => {        
        this.sucesso = categorias['sucesso'];
        this.mensagem = categorias['mensagem'];        
        this.categorias = categorias['dados'];
        //console.log(this.categorias);
      },
      erro => {
        console.log('Erro ao listar categorias. Detalhes: ' + {erro});
      }
    );
  }

}