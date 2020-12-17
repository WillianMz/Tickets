import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { AtivarUsuarioComponent } from './ativar-usuario/ativar-usuario.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AtivarUsuarioComponent,
    UsuarioFormComponent,
    UsuarioListComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
