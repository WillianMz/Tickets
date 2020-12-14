import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
 
const routes: Routes = [
  { path:'home', loadChildren:'./paginas/home/home.module#HomeModule' },  
  { path:'categorias', loadChildren:'./paginas/categoria/categoria.module#CategoriaModule'},
  { path:'tickets', loadChildren:'./paginas/ticket/ticket.module#TicketModule'},
  { path:'projetos', loadChildren:'./paginas/projeto/projeto.module#ProjetoModule'},
  { path:'usuarios', loadChildren:'./paginas/usuario/usuario.module#UsuarioModule'},  
  { path:'404', component: NotFoundComponent },
  { path: '**', redirectTo: '404'},
  { path: '#', redirectTo: 'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
