import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/_modelos/categoria';
import { CategoriaService } from 'src/app/_servicos/categoria.service';
import { switchMap} from 'rxjs/operators';

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

  categoria: Categoria = new Categoria();

  constructor(    
    private formBuilder: FormBuilder,
    private categoriaService: CategoriaService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.SituacaoAtualDoForm();
    //this.validacaoDoFormulario();
    //this.carregarCategoria();
  }

  //metodos publicos
  submitForm(){
    //desbloquear o botao ao enviar o formulario
    this.habilitaBotaoSalvar = true;

    if(this.acaoAtual == 'Adicionando')
      this.novaCategoria();
    else
      this.editarCategoria();
  }


  //metodos privados

  private novaCategoria(){
    //atribui ao objeto categoria os valores preenchidos no categoriaForm
    const categ: Categoria = Object.assign(new Categoria(), this.categoriaForm.value);

    this.categoriaService.Adicionar(categ).subscribe(
      categoria => this.sucessoAoGravar(categ),
      error => this.erroAoGravar(error)
    );
  }

  private editarCategoria(){
    const categ: Categoria = Object.assign(new Categoria(), this.categoriaForm.value);

    this.categoriaService.Editar(categ).subscribe(
      categoria => this.sucessoAoGravar(categ),
      error => this.erroAoGravar(error)
    );
  }


  private SituacaoAtualDoForm() {
    //verifica a acao que esta sendo executada no momento. Criando nova categoria, editando, etc...
    if(this.route.snapshot.url[0].path == 'Novo')
      this.acaoAtual = 'Adicionando';
    else  
      this.acaoAtual = "Editando";
  }

  private validacaoDoFormulario(){
    this.categoriaForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]]
    });
  }

  private carregarCategoria() {
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
  }

  private tituloDaPagina() {
    if(this.acaoAtual == 'Adicionando')
      this.Titulo = 'Nova Categoria';
    else
      this.Titulo = 'Editando Categoria';
  }

  private sucessoAoGravar(categoria: Categoria) {
    this.toastr.success('Dados salvos com sucesso!','Gravar dados');
    
    //redicioa para outra rota e não salva no historico do navegador, não permitindo usar o botao voltar do navegador
    this.router.navigateByUrl('categorias',{ skipLocationChange: true});
  }

  private erroAoGravar(error){
    this.toastr.error('Ocorreu um erro ao gravar os dados','Gravar dados');
    this.habilitaBotaoSalvar = false;

    if(error.status == 422)
      this.mensagensDeErro = JSON.parse(error._body).console.errors;
    else
      this.mensagensDeErro = ['Falha na comunicação com o servidor. Por favor, tente mais tarde'];
      
  }


}
