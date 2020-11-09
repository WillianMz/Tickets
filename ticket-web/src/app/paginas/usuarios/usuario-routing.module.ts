import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { RegistrarFormComponent } from '../usuarios/registrar-form/registrar-form.component';

const routes: Routes = [
  {path: 'usuario', component:UsuariosComponent, 
  children:[
      { path: 'novo',component: RegistrarFormComponent},
      { path: ':id/editar',component: UsuarioFormComponent},
      { path: 'login', component: LoginComponent}
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
