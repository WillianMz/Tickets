import { Component, OnInit, TemplateRef } from '@angular/core';
import { Categoria } from 'src/app/_modelos/categoria';
import { CategoriaService } from 'src/app/_servicos/categoria.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  
  Titulo = 'Categoria'

  categoria: Categoria;
  categorias: Categoria[];
  mensagem: string;
  sucesso: boolean;

  modalRef: BsModalRef;
  configModal = {
    backdrop: true,
    ignoreBackdropClick: true
  }


  constructor(
    private categoriaService: CategoriaService,
    private toastr: ToastrService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.listarCategorias();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.configModal);
  }

  cancelar(): void{
    this.modalRef.hide();
  }
  
  listarCategorias(){
    this.categoriaService.listarTodas().subscribe(
      (categorias) => {        
        this.sucesso = categorias['sucesso'];
        this.mensagem = categorias['mensagem'];        
        this.categorias = categorias['dados'];
        this.toastr.success('Ok','Categorias');        
      },
      erro => {
        //console.log('Erro ao listar categorias. Detalhes: ' + {erro});
        if(this.categorias == null){
          this.toastr.warning('Erro ao listar categorias. Sem conexão com o servidor.','Categorias');
        }

        //this.toastr.error('Erro ao listar categorias. Sem conexão com o servidor.','Categorias');
      }
    );
  }

}
