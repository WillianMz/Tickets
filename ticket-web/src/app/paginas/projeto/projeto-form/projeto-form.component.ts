import { stringify } from '@angular/compiler/src/util';
import { AfterContentChecked, Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { Documento } from 'src/app/_modelos/documento';
import { EquipeProjeto } from 'src/app/_modelos/EquipeDoProjeto';
import { Projeto } from 'src/app/_modelos/projeto';
import { Release } from 'src/app/_modelos/release';
import { RetornoAPI } from 'src/app/_modelos/retornoAPI';
import { ProjetoService } from 'src/app/_servicos/projeto.service';
import { ReleaseService } from 'src/app/_servicos/release.service';

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
  formSomenteLeitura: boolean = true;
  mensagem: string;
  sucesso: boolean;
  dados: any[];
  projeto: Projeto = new Projeto();

  releases: Release[];
  documentos: Documento[];
  equipes: EquipeProjeto[];

  urlAtual: string;

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
    private releaseService: ReleaseService,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService
  ) {}

  ngAfterContentChecked(): void{
    this.configurarForm();
  }

  ngOnInit(): void {

    this.urlAtual = this.route.snapshot.url[0].path

    this.configurarAcaoAtual();
    this.validarFormulario();
    //this.carregarProjeto();
    //this.configurarForm();
  }


  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
  
  habilitarEdicao(){
    if(this.formSomenteLeitura == false){
      this.formSomenteLeitura = true;
    }
    else{
      this.formSomenteLeitura = false;
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

  carregarReleases(){
    this.spinner.show()

    var idProjeto = parseInt(this.route.snapshot.paramMap.get('id'));

    this.releaseService.filtrarReleasePorProjeto(idProjeto).subscribe(
      (resultado) => {
        this.releases = resultado['dados'];
        this.spinner.hide();
      },
      (error) => {
        this.processarFalha(error);
        this.spinner.hide();
      }
    )
  }

  carregarEquipe(){

  }

  carregarDocumentos(){

  }

  //Metodos privados
  private configurarAcaoAtual(){

    //var url = this.route.snapshot.url[0].path

    switch(this.urlAtual){
      case 'novo':
        this.acaoAtual = 'editar';
        console.log(2);
        break;  
      case 'editar':
        this.acaoAtual = 'editar';
        console.log(2);
        break;      
      case 'detalhes':
        this.acaoAtual = 'visualizar';
        console.log(3);
        break;      
      /* default :
        this.acaoAtual = 'novo';
        console.log(1);
        break; */
    }
  }
 
  private configurarForm(){
    

    if(this.acaoAtual == 'novo'){
      this.titulo = 'Novo projeto';
      this.formSomenteLeitura = false;
    }

    if(this.acaoAtual == 'editar'){ 
      this.carregarProjeto();
      var nomeProjeto = this.projeto.nome;
      this.titulo = nomeProjeto;
      this.formSomenteLeitura = false;      
    }

    if(this.acaoAtual == 'visualizar'){
      this.carregarProjeto();
      var nomeProjeto = this.projeto.nome;
      this.titulo = nomeProjeto;
      this.formSomenteLeitura = true;
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
    if(this.acaoAtual === 'editar' || this.acaoAtual === 'visualizar'){
      this.route.paramMap.pipe(switchMap(params => this.projetoService.getById(+params.get('id')))).subscribe(
        (result: any) => {
          console.log(result);
          this.projeto =  result['dados'];
          this.releases = this.projeto['releases'];
          this.documentos = this.projeto['documentos'];
          this.equipes = this.projeto['equipe'];
          this.projetoForm.patchValue(this.projeto);
        },
        (error) => {
          this.processarFalha(error);
        }
      )
    }
  }

  private novoProjeto(){
    const proj: Projeto = Object.assign(new Projeto(), this.projetoForm.value);

    this.projetoService.createProjeto(proj).subscribe(
      (result) => {
        this.sucesso = result['sucesso'];
        this.mensagem = result['mensagem'];
        this.errosDoServidor = result['dados'];

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

    this.projetoService.updateProjeto(projeto).subscribe(
      (result) => {
        console.log(projeto);
        this.sucesso = result['sucesso'];
        this.mensagem = result['mensagem'];
        this.errosDoServidor = result['dados'];

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
    //this.router.navigate(['/projetos']);
    this.carregarProjeto();
    //this.habilitarEdicao();
  }

  private processarFalha(falha: any){
    this.habilitarBotaoSalvar = false;
  }

}
