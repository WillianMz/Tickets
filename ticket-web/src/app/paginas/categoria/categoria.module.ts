import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    CategoriaListComponent,
    CategoriaFormComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class CategoriaModule { }
