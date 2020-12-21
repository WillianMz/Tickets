import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { Categoria } from 'src/app/_modelos/categoria';
import { RetornoAPI } from 'src/app/_modelos/retornoAPI';
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
  msgErroDoServidor: RetornoAPI[];
  habilitaBotaoSalvar: boolean = false;
  categoria: Categoria = new Categoria();
  mensagem: string;
  sucesso: boolean;
  dados: any[];
 
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

    this.categoriaService.createCategoria(newCategoria).subscribe(
      (result) => {
        this.sucesso = result['sucesso'];
        this.mensagem = result['mensagem'];
        this.msgErroDoServidor = result['dados'];
        console.log(this.sucesso);
        console.log(this.mensagem);
        console.log(this.msgErroDoServidor);

        if(this.sucesso == true){
          this.processarSucesso();
        }
      },
      (error) =>{
        this.processarFalha(error);
      }
    )
  }

  private editarCategoria(){
    const categoria: Categoria = Object.assign(new Categoria(), this.categoriaForm.value);
    categoria.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.categoriaService.updateCategoria(categoria).subscribe(
      (result) => {
        this.sucesso = result['sucesso'];
        this.mensagem = result['mensagem'];
        this.msgErroDoServidor = result['dados'];
        console.log(this.sucesso);
        console.log(this.mensagem);
        console.log(this.msgErroDoServidor);

        if(this.sucesso == true){
          this.processarSucesso();
        }
      },
      (error) =>{
        this.processarFalha(error);
      }
    )
  }

  processarSucesso(){
    this.toastr.success('Dados salvos com sucesso!','Salvar');
    this.categoriaForm.reset();
    this.msgErroDoServidor = [];    
    this.router.navigate(['/categorias']);
  }

  processarFalha(falha: any){
    //this.msgErroDoServidor = falha.error.errors;
    this.habilitaBotaoSalvar = false;
  }

}
