import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoListComponent } from './projeto-list/projeto-list.component';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProjetoListComponent,
    ProjetoFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjetoRoutingModule
  ]
})
export class ProjetoModule { }
