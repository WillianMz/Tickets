import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/_modelos/categoria';
import { CategoriaService } from 'src/app/_servicos/categoria.service';
import { switchMap} from 'rxjs/operators';
import { SubjectSubscriber } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  Titulo = 'Nova categoria'; 
  categoriaForm: FormGroup;
  acaoAtual: string;//novo/editando
  mensagensDeErro: string[] = null;
  habilitaBotaoSalvar: boolean = false;
  //retorno: string[];

  categoria: Categoria = new Categoria();

  mensagens: string[];
  mensagem: string;
  sucesso: boolean;
  dados: string[];

  constructor(    
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validarFormulario();
  }

  validarFormulario(){
    this.categoriaForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]]
    });
  }

  salvar(){
    //habilita o botao salvar
    this.habilitaBotaoSalvar = true;

    if(this.acaoAtual == 'Novo')
      this.novaCategoria();
    
  }

  private obterAcaoAtual(){
    //verifica a ação que esta sendo executada
    if(this.route.snapshot.url[0].path == 'categorias/novo')
      this.acaoAtual = 'Novo';
    else
      this.acaoAtual == 'Editar';
  }

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
  }



  salvarCategoriaTeste(){
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
  }

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
