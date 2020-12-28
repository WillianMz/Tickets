import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { release } from 'process';
import { Release } from 'src/app/_modelos/release';
import { RetornoAPI } from 'src/app/_modelos/retornoAPI';
import { ReleaseService } from 'src/app/_servicos/release.service';

@Component({
  selector: 'app-release-form',
  templateUrl: './release-form.component.html',
  styleUrls: ['./release-form.component.css']
})
export class ReleaseFormComponent implements OnInit, AfterContentChecked {

  titulo: string;
  releaseForm: FormGroup;
  acaoAtual: string;
  errrosDoServidor: RetornoAPI[];
  habilitarBotaoSalvar: boolean = false;
  mensagem: string;
  sucesso: boolean;
  dados: any[];
  release: Release = new Release();

  //recebe a release para editar
  @Input() acao: string;
  @Input() objRelease: Release;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private releaseService: ReleaseService,
  ) 
  { }

  ngAfterContentChecked(): void{
    this.configTituloPagina();
  }

  ngOnInit(): void {
    this.configAcaoAtual();
    this.validarFormulario();
    this.carregarRelease();
  }

  private configTituloPagina(){
    if(this.acaoAtual == 'novo'){
      this.titulo = 'Nova release';
    }
    else{
      this.titulo = 'Editando release';
    }
  }

  private configAcaoAtual(){
    /* if(this.route.snapshot.url[1].path === 'novo'){
      this.acaoAtual = 'novo';
    }
    else{
      this.acaoAtual = 'editar';
    } */

    if(this.acao == 'novo'){
      this.acaoAtual = 'novo';
    }
    else if(this.acao == 'editar'){
      this.acaoAtual = 'editar';
    }
  }

  private validarFormulario(){
    this.releaseForm = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      descricao: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      versao: [null, [Validators.required]],
      dataLiberacao: [null, [Validators.required]]
    });
  }

  //carregar release
  //teste
  private carregarRelease(){
    if(this.acaoAtual == 'editar'){
      this.release = this.objRelease[0];
      console.log(this.release);
      this.releaseForm.patchValue(this.release);
    }
  }


  submitForm(){
    this.habilitarBotaoSalvar = true;

    if(this.acaoAtual == 'novo'){
      this.novaRelease();
    }
    else{
      this.editarRelease();
    }
  }


  private novaRelease(){
    const rel: Release = Object.assign(new Release(), this.releaseForm.value);
    rel.projetoId = parseInt(this.route.snapshot.paramMap.get('id'));
    //rel.projetoId = this.idProjeto;
    rel.usuarioId = 1;  
    console.log(rel.projetoId);

    this.releaseService.newRelease(rel).subscribe(
      (result) => {
        this.sucesso =  result['sucesso'];
        this.mensagem = result['mensagem'];
        this.errrosDoServidor = result['dados'];
        console.log(this.sucesso);
        console.log(this.mensagem);
        console.log(this.errrosDoServidor);

        if(this.sucesso == true){
          this.processarSucesso();
        }
      },
      (error) => {
        this.processarFalha(error); 
      }
    )
  }

  private editarRelease(){
    //const rel: Release = Object.assign(new Release(), this.releaseForm.value);
    
    //rel.projetoId = this.idProjeto; */
    //const rel = this.objRelease;
    var rel = this.objRelease;
    rel.projetoId = parseInt(this.route.snapshot.paramMap.get('id'));
    rel.usuarioId = 1;  
    console.log(this.objRelease);
    console.log('Rel: ' + rel );

    this.releaseService.updateRelease(rel).subscribe(
      (result) => {
        this.sucesso =  result['sucesso'];
        this.mensagem = result['mensagem'];
        this.errrosDoServidor = result['dados'];
        console.log(this.sucesso);
        console.log(this.mensagem);
        console.log(this.errrosDoServidor);

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
    this.releaseForm.reset();
    this.errrosDoServidor = [];
  }

  private processarFalha(falha: any){
    this.habilitarBotaoSalvar = false;
  }

}
