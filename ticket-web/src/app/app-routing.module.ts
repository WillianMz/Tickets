import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './paginas/categorias/categorias.component';
import { HomeComponent } from './paginas/home/home.component';
import { ProjetosComponent } from './paginas/projetos/projetos.component';
import { TicketsComponent } from './paginas/tickets/tickets.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';

const routes: Routes = [
  //carregamento dos modulos
  //{ path: 'usuario',   loadChildren: './modulos/usuario/usuario.module#UsuarioModule'},
  //{ path: 'categoria', loadChildren: './modulos/categoria/categoria.module#CategoriaModule'},  
  //{ path: 'projeto',   loadChildren: './modulos/projeto/projeto.module#ProjetoModule'},
  //{ path: 'ticket',    loadChildren: './modulos/ticket/ticket.module#TicketModule'},
  
  { path:'usuario',   component: UsuariosComponent },
  { path:'categoria', component: CategoriasComponent },
  { path:'projeto',   component: ProjetosComponent },
  { path:'ticket',    component: TicketsComponent },
  { path:'home',      component: HomeComponent },
  //caso alguma rota nao existir
  { path: '',   redirectTo: 'home', pathMatch:'full'}
  //{ path: '**', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
