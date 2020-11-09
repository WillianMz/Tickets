import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { ProjetosComponent } from '../projetos/projetos.component';


@NgModule({
  declarations: [ProjetoFormComponent, ProjetosComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProjetoRoutingModule
  ]
})
export class ProjetoModule { }
