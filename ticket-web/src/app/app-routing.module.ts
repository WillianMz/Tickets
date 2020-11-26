import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtivarUsuarioComponent } from './paginas/ativar-usuario/ativar-usuario.component';
import { CategoriaComponent } from './paginas/categoria/categoria.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';
import { ProjetoComponent } from './paginas/projeto/projeto.component';
import { RegistarUsuarioComponent } from './paginas/registar-usuario/registar-usuario.component';
import { TicketComponent } from './paginas/ticket/ticket.component';
import { UsuarioComponent } from './paginas/usuario/usuario.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tickets', component: TicketComponent },
  { path: 'projetos', component: ProjetoComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'categorias', component: CategoriaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistarUsuarioComponent },
  { path: 'ativar', component: AtivarUsuarioComponent },
  { path: 'erro', component: NotFoundComponent},
  { path: '**', redirectTo: 'home'},
  { path: '#', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
