import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { TicketsComponent } from '../tickets/tickets.component';

const routes: Routes = [
  {path: 'ticket', component: TicketsComponent, 
    children:[
      { path: 'novo', component: TicketFormComponent},
      { path: ':id/editar',component: TicketFormComponent}
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
