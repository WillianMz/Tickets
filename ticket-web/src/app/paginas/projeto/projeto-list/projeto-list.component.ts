import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/_modelos/projeto';
import { ProjetoService } from 'src/app/_servicos/projeto.service';

@Component({
  selector: 'app-projeto-list',
  templateUrl: './projeto-list.component.html',
  styleUrls: ['./projeto-list.component.css']
})
export class ProjetoListComponent implements OnInit {

  projetos: Projeto[];
  paginaAtual = 1;
  itensPorPagina = 8;

  constructor(
    private projetoService: ProjetoService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.projetoService.obterProjetos().subscribe(
      (result) => {
        this.projetos = result['dados'];
        console.log(this.projetos);
      }
    )
  }

}
