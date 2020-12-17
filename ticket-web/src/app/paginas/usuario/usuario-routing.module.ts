import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtivarUsuarioComponent } from './ativar-usuario/ativar-usuario.component';
import { LoginComponent } from './login/login.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

const routes: Routes = [
  { path: '', component: UsuarioListComponent },
  { path: 'novo', component: UsuarioFormComponent },
  { path: ':id/editar', component: UsuarioFormComponent },
  { path: 'ativar', component: AtivarUsuarioComponent },
  { path:'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
