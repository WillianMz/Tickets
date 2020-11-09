import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { RegistrarFormComponent } from '../usuarios/registrar-form/registrar-form.component';


@NgModule({
  declarations: [UsuarioFormComponent, RegistrarFormComponent, LoginComponent, UsuariosComponent],
  imports: [
    CommonModule,
    RouterModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
