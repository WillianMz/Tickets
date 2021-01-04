import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoListComponent } from './projeto-list/projeto-list.component';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ReleaseFormComponent } from './release-form/release-form.component';
import { DocumentoFormComponent } from './documento-form/documento-form.component';
import { EquipeFormComponent } from './equipe-form/equipe-form.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    ProjetoListComponent,
    ProjetoFormComponent,
    ReleaseFormComponent,
    DocumentoFormComponent,
    EquipeFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule,
    TabsModule.forRoot(),
    ProjetoRoutingModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjetoModule { }
