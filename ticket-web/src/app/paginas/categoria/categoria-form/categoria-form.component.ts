import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { Categoria } from 'src/app/_modelos/categoria';
import { CategoriaService } from 'src/app/_servicos/categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit, AfterContentChecked {

  tituloDaPagina: string; 
  categoriaForm: FormGroup;
  acaoAtual: string;//novo/editando
  msgErroDoServidor: string[] = null;
  habilitaBotaoSalvar: boolean = false;
  categoria: Categoria = new Categoria();

  erros: any[] = [];

//   mensagens: string[];
  mensagem: string;
  sucesso: boolean;
  dados: any[];
  mensagens: string[];
 
  constructor(    
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService
  ) { }

  ngAfterContentChecked(): void{
    this.configTituloDaPagina();
  }

  ngOnInit(): void {
    this.configAcaoAtual();
    this.validarFormulario();
    this.carregarCategoria();
  }

  private configTituloDaPagina(){
    if(this.acaoAtual == 'novo'){
      this.tituloDaPagina = 'Adicionando nova categoria';
    }
    else{
      const nomeCategoria = this.categoria.nome || '';
      this.tituloDaPagina = 'Editando categoria ' + nomeCategoria;
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
    this.categoriaForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]]
    });
  }

  private carregarCategoria(){
    if(this.acaoAtual == 'editar'){
      this.route.paramMap.pipe(switchMap(
        params => this.categoriaService.getById(+params.get('id'))
      )).subscribe(
        (dados: any) => {
          //console.log(dados);
          this.categoria = dados['dados'];
          this.categoriaForm.patchValue(dados['dados']);
        },
        (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
      );
    }
  }

  submitForm(){
    this.habilitaBotaoSalvar = true;

    if(this.acaoAtual == 'novo'){
      this.novaCategoria();
    }
    else{
      this.editarCategoria();
    }
  }

  private novaCategoria(){
    
    const newCategoria: Categoria = Object.assign(new Categoria(), this.categoriaForm.value);
    newCategoria.nome = "";

/*     this.categoriaService.createCategoria(newCategoria).subscribe(
      sucesso => {this.processarSucesso(sucesso)},
      falha => {this.processarFalha(falha)}
    ) */

    this.categoriaService.NovaCategoria(newCategoria).subscribe(
      (retorno) => {
        this.sucesso = retorno['sucesso'];
        this.mensagem = retorno['mensagem'];
        this.dados = retorno['dados']
        this.mensagens = this.dados;

        console.log(this.dados);
        console.log(this.sucesso + ' '+ this.mensagem + ' ' + this.mensagens);
        
        if(this.sucesso == true){
          //this.toastr.success('Categoria adicionada com sucesso');
          return this.sucessoAoSalvar(newCategoria);
        }
        else{
          this.toastr.warning('Categoria não adicionada. Motivo: ' + this.mensagem);
          //return this.erroAoSalvar(this.mensagem);
        }

      },
      erro => {
        console.log(erro);
      } 
    )
  }

  private editarCategoria(){
    const categoria: Categoria = Object.assign(new Categoria(), this.categoriaForm.value);
    categoria.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.categoriaService.Editar(categoria).subscribe(
      (retorno) => {
        this.sucesso = retorno['sucesso'];
        this.mensagem = retorno['mensagem'];
        this.dados = retorno['dados'];
        
        //console.log(retorno["dados{'message'}"]);

        if(this.sucesso == true){
          //return this.sucessoAoSalvar(categoria);
          return this.toastr.success(this.mensagem);
        }
        else{
          //return this.erroAoSalvar(this.mensagem);
          return this.toastr.error(this.mensagem + ' ' + this.mensagens);
        }
      },
      erro => {
        console.log(erro);
      }
    )
  }

  private sucessoAoSalvar(categoria: Categoria){
    this.toastr.success('Categoria adicionada com sucesso!','Salvar');
    this.router.navigate(['/categorias']);
  }

  private erroAoSalvar(error){
    this.toastr.error('Ocorreu um erro ao salvar!');
    this.habilitaBotaoSalvar = false;

    if(error.status == 422){
      this.msgErroDoServidor = JSON.parse(error._body).errors;      
    }
    else{
      this.msgErroDoServidor = ['Falha na comunicação com o servidor. Por favor, tente mais tarde!'];
    }

  }


  processarSucesso(response: any){
    this.categoriaForm.reset();
    this.erros = [];
    this.router.navigate(['/categorias']);
  }

  processarFalha(falha: any){
    this.erros = falha.error.errors;
  }

}
