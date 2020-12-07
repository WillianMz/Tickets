import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { CategoriaFormComponent } from './paginas/categoria/categoria-form/categoria-form.component';
import { CategoriaListComponent } from './paginas/categoria/categoria-list/categoria-list.component';
import { HomeComponent } from './paginas/home/home.component';
import { ProjetoListComponent } from './paginas/projeto/projeto-list/projeto-list.component';
import { TicketListComponent } from './paginas/ticket/ticket-list/ticket-list.component';
import { UsuarioListComponent } from './paginas/usuario/usuario-list/usuario-list.component';
 
const routes: Routes = [
  { path:'home',      component: HomeComponent },
  { path:'tickets',   component: TicketListComponent},
  { path:'projetos',  component: ProjetoListComponent},
  { path:'categorias',component: CategoriaListComponent},
  { path:'usuarios',  component: UsuarioListComponent},
  
  { path:'categorias/novo', component: CategoriaFormComponent },
  
  { path:'404', component: NotFoundComponent },
  { path: '**', redirectTo: '404'},
  { path: '#', redirectTo: 'home'},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
