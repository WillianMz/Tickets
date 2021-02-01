import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UsuarioRoutingModule } from './usuario-routing.module';


@NgModule({
  declarations: [
    UsuarioFormComponent,
    UsuarioListComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    NgxPaginationModule,
    TabsModule.forRoot(),
    UsuarioRoutingModule,
    NgxSpinnerModule
  ]
})
export class UsuarioModule { }
