import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { AtivarUsuarioComponent } from 'src/app/_paginas/ativar-usuario/ativar-usuario.component';
import { LoginComponent } from 'src/app/_paginas/login/login.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';


@NgModule({
  declarations: [
    AtivarUsuarioComponent,
    LoginComponent,
    UsuarioFormComponent,
    UsuarioListComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
