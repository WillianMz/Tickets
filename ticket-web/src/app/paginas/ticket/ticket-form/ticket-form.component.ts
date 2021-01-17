import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/_modelos/categoria';
import { Projeto } from 'src/app/_modelos/projeto';
import { CategoriaService } from 'src/app/_servicos/categoria.service';
import { ProjetoService } from 'src/app/_servicos/projeto.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  categorias: Categoria[];
  projetos: Projeto[];
  
  constructor(
    private categoriaService: CategoriaService,
    private projetoService: ProjetoService
  ) 
  { }

  ngOnInit(): void {
  }

  listarProjetos(){
    this.projetoService.obterProjetos().subscribe(
      (projetos) => {
        this.projetos = projetos['dados'];
      }
    )
  }

  listarCategorias(){
    this.categoriaService.obterCategorias().subscribe(
      (categorias) => {
        this.categorias = categorias['dados'];
      }
    )
  }

}
