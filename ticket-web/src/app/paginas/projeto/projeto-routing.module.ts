import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { ProjetoListComponent } from './projeto-list/projeto-list.component';
import { ReleaseFormComponent } from './release-form/release-form.component';

const routes: Routes = [
  { path: '', component: ProjetoListComponent },
  { path: 'novo', component: ProjetoFormComponent },
  { path: 'editar/:id', component: ProjetoFormComponent },
  { path: 'detalhes/:id', component: ProjetoFormComponent },

  { path: 'release/novo', component:ReleaseFormComponent},
  
  { path: ':id/editar/release/novo', component: ReleaseFormComponent },
  { path: 'release/novo', component: ReleaseFormComponent },
  { path: 'release/:id/editar', component: ReleaseFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetoRoutingModule { }
