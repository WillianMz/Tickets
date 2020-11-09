import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriasComponent } from '../categorias/categorias.component';

const routes: Routes = [
  { path:'categoria', component: CategoriasComponent, 
    children: [
      { path:'novo', component: CategoriaFormComponent },
      { path:':id/editar', component: CategoriaFormComponent }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
