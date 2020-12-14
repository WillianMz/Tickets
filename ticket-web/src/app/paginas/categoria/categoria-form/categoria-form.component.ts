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

//   mensagens: string[];
  mensagem: string;
  sucesso: boolean;
  dados: string[];
 
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
        params => this.categoriaService.filtarPorID(+params.get('id'))
      )).subscribe(
        (dados: any) => {
          console.log(dados);
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

    this.categoriaService.NovaCategoria(newCategoria).subscribe(
      (retorno) => {
        this.sucesso = retorno['sucesso'];
        this.mensagem = retorno['mensagem'];
        this.dados = retorno['dados'];
        console.log(this.sucesso + this.mensagem);
        
        if(this.sucesso == true){
          //this.toastr.success('Categoria adicionada com sucesso');
          return this.sucessoAoSalvar(newCategoria);
        }
        else{
          //this.toastr.warning('Categoria não adicionada. Motivo: ' + this.mensagem);
          return this.erroAoSalvar(this.mensagem);
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
        console.log(this.sucesso + ' ' + this.mensagem);

        if(this.sucesso == true){
          return this.sucessoAoSalvar(categoria);
        }
        else{
          return this.erroAoSalvar(this.mensagem);
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


/*   salvar(){
    //habilita o botao salvar
    this.habilitaBotaoSalvar = true;

    if(this.acaoAtual == 'Novo')
      this.novaCategoria();
    
  } */

/* 
  novaCategoria(){
    this.categoriaService.NovaCategoria(this.categoria).subscribe(
      (retorno) => {
        this.sucesso = retorno['sucesso'];
        this.mensagem = retorno['mensagem'];
        this.dados = retorno['dados'];

        if(this.sucesso == true){
          this.toastr.success('Nova categoria adicionada com sucesso!');
        }
        else{
          this.toastr.warning('Categoria não adicionada. Motivo: '+ this.mensagem);
        }
      },
      erro => {
        this.toastr.error('Ocorreu um erro: ' + erro, 'Nova categoria');
      }
    )
  } */



/*   salvarCategoriaTeste(){
    this.categoria.nome = 'ategoria2';
    this.categoriaService.NovaCategoria(this.categoria).subscribe(
      (mensagens) => {
        this.sucesso = mensagens['sucesso'];
        this.mensagem = mensagens['mensagem'];
        this.dados = mensagens['dados'];
        console.log(this.sucesso + this.mensagem);
        
        if(this.sucesso == true){
          this.toastr.success('Categoria adicionada com sucesso');
        }
        else{
          this.toastr.warning('Categoria não adicionada. Motivo: ' + this.mensagem);
        }

      },
      erro => {
        console.log(erro);
      }
    )
  } */

    //metodos publicos
/*   submitForm(){
    //desbloquear o botao ao enviar o formulario
    this.habilitaBotaoSalvar = true;

    if(this.acaoAtual == 'Adicionando')
      this.novaCategoria();
    else
      this.editarCategoria();
  } */

/*   salvarCategoria(form: NgForm){
    this.categoriaService.NovaCategoria(form).subscribe(
      res => {
        console.log('passou aqui');
      },(error) => {
        console.log(error);
      }
    );
  }
 */

  //metodos privados

/*   private novaCategoria(){
    //atribui ao objeto categoria os valores preenchidos no categoriaForm
    const categ: Categoria = Object.assign(new Categoria(), this.categoriaForm.value);

    this.categoriaService.Adicionar(categ).subscribe(
      categoria => this.sucessoAoGravar(categ),
      error => this.erroAoGravar(error)
    );
  }
 */
/*   private editarCategoria(){
    const categ: Categoria = Object.assign(new Categoria(), this.categoriaForm.value);

    this.categoriaService.Editar(categ).subscribe(
      categoria => this.sucessoAoGravar(categ),
      error => this.erroAoGravar(error)
    );
  }
 */

/*   private SituacaoAtualDoForm() {
    //verifica a acao que esta sendo executada no momento. Criando nova categoria, editando, etc...
    if(this.route.snapshot.url[0].path == 'Novo')
      this.acaoAtual = 'Adicionando';
    else  
      this.acaoAtual = "Editando";
  } */

/*   private validacaoDoFormulario(){
    this.categoriaForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]]
    });
  }
 */
/*   private carregarCategoria() {
    if(this.acaoAtual == 'Editando'){
      this.route.paramMap.pipe(
        switchMap(params => this.categoriaService.filtarPorID(+params.get('id')))).subscribe(
          (categ) => {
            this.categoria = categ;
            this.categoriaForm.patchValue(categ);
          },
          (error) => alert('eero')
        ) 
    }
  } */

/*   private tituloDaPagina() {
    if(this.acaoAtual == 'Adicionando')
      this.Titulo = 'Nova Categoria';
    else
      this.Titulo = 'Editando Categoria';
  } */

 /*  private sucessoAoGravar(categoria: Categoria) {
    this.toastr.success('Dados salvos com sucesso!','Gravar dados');
    
    //redicioa para outra rota e não salva no historico do navegador, não permitindo usar o botao voltar do navegador
    this.router.navigateByUrl('categorias',{ skipLocationChange: true});
  }
 */
/*   private erroAoGravar(error){
    this.toastr.error('Ocorreu um erro ao gravar os dados','Gravar dados');
    this.habilitaBotaoSalvar = false;

    if(error.status == 422)
      this.mensagensDeErro = JSON.parse(error._body).console.errors;
    else
      this.mensagensDeErro = ['Falha na comunicação com o servidor. Por favor, tente mais tarde'];
      
  } */


}
