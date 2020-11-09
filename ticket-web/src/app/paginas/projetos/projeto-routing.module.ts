import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { ProjetosComponent } from '../projetos/projetos.component';

const routes: Routes = [
  { path:'projeto', component:ProjetosComponent, 
    children:[
      {path: 'novo', component: ProjetoFormComponent },
      {path: ':id/editar', component: ProjetoFormComponent}
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetoRoutingModule { }
