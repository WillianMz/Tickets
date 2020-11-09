import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriasComponent } from '../categorias/categorias.component';



@NgModule({
  declarations: [CategoriaFormComponent, CategoriasComponent],
  imports: [
    CommonModule,
    RouterModule,
    CategoriaRoutingModule
  ]
})
export class CategoriaModule { }
