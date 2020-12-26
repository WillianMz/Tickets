import { AfterContentChecked, Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { Documento } from 'src/app/_modelos/documento';
import { EquipeProjeto } from 'src/app/_modelos/EquipeDoProjeto';
import { Projeto } from 'src/app/_modelos/projeto';
import { Release } from 'src/app/_modelos/release';
import { RetornoAPI } from 'src/app/_modelos/retornoAPI';
import { ProjetoService } from 'src/app/_servicos/projeto.service';

@Component({
  selector: 'app-projeto-form',
  templateUrl: './projeto-form.component.html',
  styleUrls: ['./projeto-form.component.css']
})
export class ProjetoFormComponent implements OnInit, AfterContentChecked {

  titulo: string;
  projetoForm: FormGroup;
  acaoAtual: string;
  errosDoServidor: RetornoAPI[];
  habilitarBotaoSalvar: boolean = false;
  mensagem: string;
  sucesso: boolean;
  dados: any[];
  projeto: Projeto = new Projeto();

  releases: Release[];
  documentos: Documento[];
  equipes: EquipeProjeto[];

  itensPorPagina = 4;
  paginaAtual = 1;

  modalRef: BsModalRef;

  /**
   *
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private projetoService: ProjetoService,
    private modalService: BsModalService
  ) {}

  ngAfterContentChecked(): void{
    this.configTituloDaPagina();
  }

  ngOnInit(): void {
    this.configAcaoAtual();
    this.validarFormulario();
    this.carregarProjeto();
  }


  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }


  //Metodos privados
 
  private configTituloDaPagina(){
    if(this.acaoAtual == 'novo'){
      this.titulo = 'Novo projeto';
    }
    else{
      const nomeProjeto = this.projeto.nome || '';
      this.titulo = 'Editando projeto ' + nomeProjeto;
    }
  }

  private configAcaoAtual(){
      if(this.route.snapshot.url[0].path === 'novo'){
        this.acaoAtual = 'novo';
      }
      else{
        this.acaoAtual = 'editar';
      }
  }

  private validarFormulario(){
    this.projetoForm = this.formBuilder.group({
      id:[null],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      descricao: [null, [Validators.required, Validators.maxLength(100)]]
    })
  }

  //carregar objeto projeto no form
  private carregarProjeto(){
    if(this.acaoAtual == 'editar'){
      this.route.paramMap.pipe(switchMap(
        params => this.projetoService.getById(+params.get('id'))
      )).subscribe(
        (result: any) => {
          console.log(result);
          this.projeto =  result['dados'];
          console.log(this.projeto);
          this.releases = this.projeto['releases'];
          console.log(this.releases);
          this.documentos = this.projeto['documentos'];
          this.equipes = this.projeto['equipe']
          this.projetoForm.patchValue(this.projeto);
        },
        (error) => {
          this.processarFalha(error);
        }
      )
    }
  }

  submitForm(){
    this.habilitarBotaoSalvar = true;

    if(this.acaoAtual == 'novo'){
      this.novoProjeto();
    }
    else{
      this.editarProjeto();
    }
  }

  private novoProjeto(){
    const proj: Projeto = Object.assign(new Projeto(), this.projetoForm.value);

    this.projetoService.createProjeto(proj).subscribe(
      (result) => {
        this.sucesso = result['sucesso'];
        this.mensagem = result['mensagem'];
        this.errosDoServidor = result['dados'];
        console.log(this.sucesso);
        console.log(this.mensagem);
        console.log(this.errosDoServidor);

        if(this.sucesso == true){
          this.processarSucesso();
        }
      },
      (error) =>{
        this.processarFalha(error);
      }
    )
  }

  private editarProjeto(){
    const projeto: Projeto = Object.assign(new Projeto(), this.projetoForm.value);
    projeto.id = parseInt(this.route.snapshot.paramMap.get('id'));

    console.log(projeto);

    this.projetoService.updateProjeto(projeto).subscribe(
      (result) => {
        console.log(projeto);
        this.sucesso = result['sucesso'];
        this.mensagem = result['mensagem'];
        this.errosDoServidor = result['dados'];

        console.log(this.sucesso);
        console.log(this.mensagem);
        console.log(this.errosDoServidor);

        if(this.sucesso == true){
          this.processarSucesso();
        }
      },
      (error) => {
        this.processarFalha(error);
      }
    )
  }

  private processarSucesso(){
    this.toastr.success('Dados salvos com sucesso!','Projeto');
    this.projetoForm.reset();
    this.errosDoServidor = [];
    this.router.navigate(['/projetos']);
  }

  private processarFalha(falha: any){
    this.habilitarBotaoSalvar = false;
  }

}
