import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TicketListComponent,
    TicketFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TicketRoutingModule
  ]
})
export class TicketModule { }
