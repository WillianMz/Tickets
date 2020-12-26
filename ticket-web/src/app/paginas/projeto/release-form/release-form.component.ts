import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    if(this.route.snapshot.url[1].path === 'novo'){
      this.acaoAtual = 'novo';
    }
    else{
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
    rel.projetoId = 6;
    rel.usuarioId = 1;
    console.log(rel.nome);

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
    const rel: Release = Object.assign(new Release(), this.releaseForm.value);
    rel.projetoId = 6;
    rel.usuarioId = 1;
    console.log(rel.nome);

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

  private processarSucesso(){
    this.releaseForm.reset();
    this.errrosDoServidor = [];
  }

  private processarFalha(falha: any){
    this.habilitarBotaoSalvar = false;
  }

}
