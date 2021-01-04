import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
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
  modalRef: BsModalRef;

  constructor(
    private projetoService: ProjetoService,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }


  listar(){
    this.spinner.show();

    this.projetoService.obterProjetos().subscribe(
      (result) => {
        this.projetos = result['dados'];
        console.log(this.projetos);
        this.spinner.hide();
      },
      (error) => {
        console.log('erro: ' + error);
        this.spinner.hide();
      } 
    )
  }

}
