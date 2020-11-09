import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { TicketsComponent } from '../tickets/tickets.component';


@NgModule({
  declarations: [TicketFormComponent, TicketsComponent],
  imports: [
    CommonModule,
    RouterModule,
    TicketRoutingModule
  ]
})
export class TicketModule { }
