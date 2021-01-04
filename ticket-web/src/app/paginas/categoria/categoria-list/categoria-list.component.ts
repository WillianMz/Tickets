import { Component, OnInit, TemplateRef } from '@angular/core';
import { Categoria } from 'src/app/_modelos/categoria';
import { CategoriaService } from 'src/app/_servicos/categoria.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  
  Titulo = 'Categoria'
  categorias: Categoria[];
  mensagem: string;
  sucesso: boolean;  
  //diz ao componente que inicialize da pagina 1
  paginaAtual = 1;
  itensPorPagina = 8;
  mostrarSpin: boolean = false;

  constructor(
    private categoriaService: CategoriaService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.listarCategorias();
  }

  
  listarCategorias(){
    this.mostrarSpin = true;
    this.spinner.show();
    
    this.categoriaService.obterCategorias().subscribe(
      (categorias) => {
        this.categorias = categorias['dados'];
        this.sucesso = categorias['sucesso'];
        this.mensagem = categorias['mensagem'];

        this.mostrarSpin = false;
        this.spinner.hide();

        console.log(categorias);
        console.log(this.mensagem);
        console.log(this.sucesso);
      },
      (error) => {
        console.log('erro: ' + error);
        this.spinner.hide();
      }      
    )
  }

}
